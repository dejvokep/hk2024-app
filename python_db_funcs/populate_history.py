import bson
from pymongo import MongoClient
import random
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
#portfolios.update_one({"_id": objid}, { "$push": { "history": {"date": "test", "value": 10} } })

""" value = 341210.94
date = datetime.datetime.now()
history = []
steps = 12
for _ in range(365*steps):
    value = value + (value * random.uniform(-0.001, 0.0008))
    if random.randint(0, 1000) == 0:
        value = value - value*0.3
    elif value%(steps*10) == 0 and random.randint(0, 2) == 0:
        value = value + random.choice([-0.07, 0.03]) * value
    date = date - datetime.timedelta(hours=24//steps)
    history.append({"date": date.strftime("%Y-%m-%dT%H:%M:%S"), "value": round(value, 2)})

print(history[::-1], file=open("history.txt", "w")) """

history = []
with open("history.txt", "r") as f:
    history = f.readline()
    history = eval(history)

portfolios.update_one({"_id": objid}, { "$set": { "history": history } })
    #print({"date": date.strftime("%Y-%m-%dT%H:%M:%S"), "value": value})