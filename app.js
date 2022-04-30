// importing packages
import express from "express";
import bodyParser from "body-parser";

// importing routes
import reportRoutes from "./routes/reports.route.js";

// starting express server
const app = express();

// getting data in json format --- application/json
app.use(bodyParser.json());

// making the server accept json data
app.use(express.json());

app.use(reportRoutes);

export default app;
