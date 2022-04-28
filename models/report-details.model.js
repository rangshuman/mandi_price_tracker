import mongoose from "mongoose";

export default mongoose.model(
	"ReportDetails",
	mongoose.Schema(
		{
			userID: {
				type: String,
				required: [true, "Provide userID"],
				trim: true,
			},
			marketID: {
				type: String,
				required: [true, "Provide marketID"],
			},
			marketName: {
				type: String,
				required: [true, "Provide marketName"],
				trim: true,
			},
			marketType: {
				type: String,
				required: [true, "Provide marketType"],
				trim: true,
			},
			cmdtyID: {
				type: String,
				required: [true, "Provide cmdtyID"],
			},
			cmdtyName: {
				type: String,
				required: [true, "Provide cmdtyName"],
				trim: true,
			},
			priceUnit: {
				type: String,
				required: [true, "Provide priceUnit"],
				trim: true,
			},
			convFctr: {
				type: Number,
				required: [true, "Provide convFctr"],
			},
			price: {
				type: Number,
				required: [true, "Provide price"],
			},
		},
		{ timestamps: true }
	)
);
