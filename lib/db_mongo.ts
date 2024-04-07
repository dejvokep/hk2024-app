import { MongoClient, ObjectId } from 'mongodb';

// Replace with your connection string and database name
const client = new MongoClient(process.env.MONGO_URI || "");

export async function createUser(_id: string, email: string, name: string, surname: string, balance: number = 0, questionnaire: Map<string, any> = new Map, portfolio: Map<string, number> = new Map, transactions: [] = []): Promise<any> {
    await client.connect();
    const db = client.db("users");

    const info_collection = db.collection("userdata");
    await info_collection.insertOne({ _id: new ObjectId(_id), email, name, surname, balance, questionnaire});

    const portfolios_collection = db.collection("portfolios");
    await portfolios_collection.insertOne({ _id: new ObjectId(_id), portfolio});
    
    const transactions_collection = db.collection("transactions");
    await transactions_collection.insertOne({ _id: new ObjectId(_id), transactions});

    await client.close();
}

export async function updateUserQuestionnaire(_id: string, questionnaire: Map<string, any>): Promise<any> {
    await client.connect();
    const db = client.db("users");

    const info_collection = db.collection("userdata");
    await info_collection.updateOne({ _id: new ObjectId(_id) }, { $set: { questionnaire } });

    await client.close();
}

export async function getUserQuestionnaire(_id: string): Promise<any> {
    await client.connect();
    const db = client.db("users");

    const info_collection = db.collection("userdata");
    const info = await info_collection.findOne({ _id: new ObjectId(_id) });

    await client.close();
    return info?.questionnaire; // Add null check using the optional chaining operator
}

export async function getUserInfo(_id: string): Promise<any> {
    await client.connect();
    const db = client.db("users");

    const info_collection = db.collection("info");
    const info = await info_collection.findOne({ _id: new ObjectId(_id) });

    await client.close();
    return info;
}

export async function getPortfolio(_id: string): Promise<{[key: string]: number}> {
    await client.connect();
    const db = client.db("users");

    const portfolios_collection = db.collection("portfolios");
    const portfolio = await portfolios_collection.findOne({ _id: new ObjectId(_id) });

    await client.close();
    return portfolio?.portfolio;
}

export async function getHistory(_id: string): Promise<Array<{date: string, value: number}>> {
    await client.connect();
    const db = client.db("users");

    const portfolios_collection = db.collection("portfolios");
    const portfolio = await portfolios_collection.findOne({ _id: new ObjectId(_id) });

    await client.close();
    return portfolio?.history;
}

export async function updateUserStock(_id: string, stock: string, quantity: number): Promise<any> {
    await client.connect();
    const db = client.db("users");

    const portfolios_collection = db.collection("portfolios");
    await portfolios_collection.updateOne({ _id: new ObjectId(_id) }, { $set: { [stock]: quantity } });

    await client.close();
}

export async function getTransactions(_id: string): Promise<any> {
    await client.connect();
    const db = client.db("users");

    const transactions_collection = db.collection("transactions");
    const transactions = await transactions_collection.findOne({ _id: new ObjectId(_id) });

    await client.close();
    return transactions?.transactions;
}

export async function addTransactions(_id: string, transaction: any): Promise<any> {
    await client.connect();
    const db = client.db("users");

    const transactions_collection = db.collection("transactions");
    await transactions_collection.updateOne({ _id: new ObjectId(_id) }, { $push: { transactions: transaction } });

    await client.close();
}

export async function updateQuestionnaire(_id: string, q: any): Promise<any> {
    await client.connect();
    const db = client.db("users");

    const portfolios_collection = db.collection("info");
    await portfolios_collection.updateOne({ _id: new ObjectId(_id) }, { $set: { "questionnaire": q } }, {upsert: true});

    await client.close();
}