import { MongoClient } from 'mongodb';

// Replace with your connection string and database name
const mongo = new MongoClient(process.env.MONGO_URI || "");

