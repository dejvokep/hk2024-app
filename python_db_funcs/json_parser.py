import json
import datetime
import bson
from pymongo import MongoClient
import datetime

def get_database():
 
   # Provide the mongodb atlas url to connect python to mongodb using pymongo
   CONNECTION_STRING = ''
 
   # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
   client = MongoClient(CONNECTION_STRING)
 
   # Create the database for our example (we will use the same database throughout the tutorial
   return client['users']

db = get_database()
portfolios = db.get_collection('portfolios')
objid = bson.ObjectId("66116391ee779e1b4fd68379")

symbols = ["nvda", "raiff", "wmt"]
volumes = {
    "nvda": 100,
    "raiff": 10000,
    "wmt": 1000
}
data = {"nvda": [], "raiff": [], "wmt": []}
for symbol in symbols:
    with open(f"C://Users//tomas//Projects//hackathons//hackkosice-2024//hk2024-app//python_db_funcs//{symbol}.json", "r") as file:
        dic = json.load(file)
        for entry in dic["data"]["chart"]:
            date = entry["z"]["dateTime"]
            value = entry["y"]
            data[symbol].append({"date": datetime.datetime.strptime(date, "%m/%d/%Y").strftime("%Y-%m-%dT%H:%M:%S"), "value": value*volumes[symbol]})
            #date, value

history = []
for i in range(len(data["nvda"])):
    history.append({"date": data["nvda"][i]["date"], "value": data["nvda"][i]["value"] + data["raiff"][i]["value"] + data["wmt"][i]["value"]})
    # Generate timestamps for every 2 hours
    start_date = datetime.datetime.strptime(data["nvda"][0]["date"], "%Y-%m-%dT%H:%M:%S")
    end_date = datetime.datetime.strptime(data["nvda"][-1]["date"], "%Y-%m-%dT%H:%M:%S")
    timestamps = [start_date + datetime.timedelta(hours=2*i) for i in range(int((end_date - start_date).total_seconds() / 7200) + 1)]

    # Interpolate values for each symbol at the generated timestamps
    interpolated_data = {}
    for symbol in symbols:
        symbol_data = data[symbol]
        interpolated_values = []
        for i in range(len(timestamps)):
            timestamp = timestamps[i]
            if timestamp < start_date:
                interpolated_values.append(symbol_data[0]["value"])
            elif timestamp > end_date:
                interpolated_values.append(symbol_data[-1]["value"])
            else:
                prev_index = next_index = 0
                for j in range(len(symbol_data)):
                    if datetime.datetime.strptime(symbol_data[j]["date"], "%Y-%m-%dT%H:%M:%S") <= timestamp:
                        prev_index = j
                    else:
                        next_index = j
                        break
                prev_value = symbol_data[prev_index]["value"]
                next_value = symbol_data[next_index]["value"]
                prev_timestamp = datetime.datetime.strptime(symbol_data[prev_index]["date"], "%Y-%m-%dT%H:%M:%S")
                next_timestamp = datetime.datetime.strptime(symbol_data[next_index]["date"], "%Y-%m-%dT%H:%M:%S")
                time_diff = (timestamp - prev_timestamp).total_seconds()
                value_diff = next_value - prev_value
                interpolated_value = prev_value + (value_diff / (next_timestamp - prev_timestamp).total_seconds()) * time_diff
                interpolated_values.append(interpolated_value)
        interpolated_data[symbol] = interpolated_values

    # Calculate history based on interpolated data
    history = []
    for i in range(len(timestamps)):
        timestamp = timestamps[i]
        value = sum(interpolated_data[symbol][i] for symbol in symbols)
        history.append({"date": timestamp.strftime("%Y-%m-%dT%H:%M:%S"), "value": value})

    print(history)
    portfolios.update_one({"_id": objid}, { "$set": { "history": history } })
    break