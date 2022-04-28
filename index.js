import dotenv from "dotenv";
dotenv.config();

// importing packages
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// importing routes
import reportRoutes from "./routes/reports.route.js";

// starting express server
const app = express();

// getting data in json format --- application/json
app.use(bodyParser.json());

// making the server accept json data
app.use(express.json());

// connecting to the MongoDB database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to the Database."));

app.use(reportRoutes);

// listning for server requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log("Server Started at PORT: " + PORT);
});
