import dotenv from "dotenv";
dotenv.config();

// importing server
import app from "./app.js";

// importing database utils
import ConnectMongoDb from "./database/mongodb.connect.js";
ConnectMongoDb();

// listning for server requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log("Server Started at PORT: " + PORT);
});
