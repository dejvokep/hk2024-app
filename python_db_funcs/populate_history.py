import bson
from pymongo import MongoClient
import random
import datetime

def get_database():
 
   # Provide the mongodb atlas url to connect python to mongodb using pymongo
   CONNECTION_STRING = 'mongodb+srv://admin:QSSCjjFGWvJSZdRq@userdata.ciyvzl2.mongodb.net/?retryWrites=true&w=majority&appName=userdata'
 
   # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
   client = MongoClient(CONNECTION_STRING)
 
   # Create the database for our example (we will use the same database throughout the tutorial
   return client['users']

db = get_database()
portfolios = db.get_collection('portfolios')
objid = bson.ObjectId("66116391ee779e1b4fd68379")
#portfolios.update_one({"_id": objid}, { "$push": { "history": {"date": "test", "value": 10} } })

format = "%Y-%m-%dT%H:%M:%S"
for i in range(1, 13):
    date = datetime.datetime.strptime("2024-04-06T14:00:00", format) + datetime.timedelta(hours=i*2)
    portfolios.update_one({"_id": objid}, { "$push": { "history": {"date": date.strftime(format), "value": 341210} } })
    #print({"date": date.strftime("%Y-%m-%dT%H:%M:%S"), "value": value})