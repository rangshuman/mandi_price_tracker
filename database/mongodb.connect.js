import mongoose from "mongoose";

const ConnectDb = (db) => {
	try {
		// connecting to the MongoDB database
		mongoose.connect(`mongodb://localhost/${db}`, {
			useNewUrlParser: true,
		});
		const dbConnect = mongoose.connection;
		dbConnect.on("error", (error) => console.error(error));
		dbConnect.once("open", () =>
			console.log(`Connected to the Database. Name: ${db}`)
		);
	} catch (err) {
		console.error("Error connecting to mongodb");
		console.error(err);
	}
};

export default ConnectDb;
