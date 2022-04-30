import mongoose from "mongoose";

const ConnectMongoDb = () => {
	try {
		// connecting to the MongoDB database
		mongoose.connect(process.env.DATABASE_URL, {
			useNewUrlParser: true,
		});
		const dbConnect = mongoose.connection;
		dbConnect.on("error", (error) => console.error(error));
		dbConnect.once("open", () =>
			console.log(`Connected to the Database. Name: Dev-Db`)
		);
	} catch (err) {
		console.error("Error connecting to mongodb");
		console.error(err);
	}
};

export default ConnectMongoDb;
