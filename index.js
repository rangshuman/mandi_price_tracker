import dotenv from "dotenv";
dotenv.config();

// importing dependencies
import mongoose from "mongoose";

// importing server
import app from "./app.js";

// connecting to the MongoDB database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to the Database."));

// listning for server requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log("Server Started at PORT: " + PORT);
});
