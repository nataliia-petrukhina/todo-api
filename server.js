import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./database/connectDB.js";

const app = express();
const port = process.env.PORTNUMMER || 5000;

//
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Hello von Server!");
});

// Server starten


const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    console.log("Datenbank verbuden");
    //
    app.listen(port, () => {
      console.log(`Server läuft auf http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

// Server starten vdfvd
startServer()