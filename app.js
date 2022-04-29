// importing packages
import express from "express";
import bodyParser from "body-parser";

// importing routes
import reportRoutes from "./routes/reports.route.js";

// importing db utils
import ConnectDb from "./database/mongodb.connect.js";

const CreateServer = (db) => {
	// starting express server
	const app = express();

	// getting data in json format --- application/json
	app.use(bodyParser.json());

	// making the server accept json data
	app.use(express.json());

	if (db) {
		ConnectDb(db);
	} else {
		ConnectDb(process.env.DATABASE_NAME);
	}

	app.use(reportRoutes);

	return app;
};

export default CreateServer;
