import cors from "cors";
import express from "express";
import "./loadEnvironment.js";
import { getDB } from "./connexion.js";

const app = express();

const allowedOrigins = [
  "http://127.0.0.1:5173",
  "https://671e91131328edc20a063305--tisseurduweb.netlify.app",
  "https://tisseurduweb.netlify.app",
  "https://tisseurduweb.com",
];

app.use(cors({ origin: allowedOrigins }));
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

app.get("/weather", async (req, res) => {
  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${process.env.WEATHER_API}&units=metric`
    );
    const result = await weatherResponse.json();
    res.status(200).send(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
