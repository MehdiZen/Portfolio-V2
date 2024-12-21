import { MongoClient } from "mongodb";

const connectionString = process.env.DB_CONNECTION || "";
const client = new MongoClient(connectionString);
let db;

async function connectDB() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
        db = client.db('Portfolio');
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.stack);
    }
}

async function getDB() {
    if (!db) {
        await connectDB();
    }
    return db;
}

export { getDB };

connectDB().catch(console.dir);
