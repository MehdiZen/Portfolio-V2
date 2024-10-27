import cors from "cors";
import express from "express";
import "./loadEnvironment.js";
import { getDB } from "./connexion.js";

const app = express();

app.use(cors({ origin: "http://127.0.0.1:5173" }));
app.get("/", async (req, res) => {
    try {
        const db = await getDB(); 
        const collection = db.collection("projects");
        const results = await collection.find({}).limit(50).toArray();
        res.status(200).send(results);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
});

app.get("/projects", async (req, res) => {
    try {
        const db = await getDB(); 
        const collection = db.collection("projects");
        const results = await collection.find({}).limit(50).toArray();
        res.status(200).send(results);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
});

const port = process.env.PORT || 6000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
