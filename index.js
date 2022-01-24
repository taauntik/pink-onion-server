import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const URL = process.env.DB_URL || "mongodb://localhost/pink-onion";

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// greeting route
app.get("/", (req, res) => {
  res.send("API is Running");
});

// routing setup


// database connection
mongoose.connect(URL).then(() => {
  app.listen(PORT, () => console.log(`Listening to the port ${PORT}`));
});
