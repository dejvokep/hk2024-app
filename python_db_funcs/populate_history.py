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

value = 1000000
date = datetime.datetime.now() - datetime.timedelta(days=365)
for x in range(1460):
    value = value + (value * random.uniform(-0.003, 0.005))
    portfolios.update_one({"_id": objid}, { "$push": { "history": {"date": date.strftime("%Y-%m-%dT%H:%M:%S"), "value": round(value, 2)} } })
    #print({"date": date.strftime("%Y-%m-%dT%H:%M:%S"), "value": value})
    date = date + datetime.timedelta(hours=6)