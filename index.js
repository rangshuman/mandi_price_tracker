import dotenv from "dotenv";
dotenv.config();

// importing server
import CreateServer from "./app.js";
const app = CreateServer();

// listning for server requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log("Server Started at PORT: " + PORT);
});
