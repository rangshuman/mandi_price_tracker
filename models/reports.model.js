import mongoose from "mongoose";

export default mongoose.model(
	"Report",
	mongoose.Schema(
		{
			cmdtyID: {
				type: String,
				required: [true, "Provide cmdtyID"],
			},
			cmdtyName: {
				type: String,
				required: [true, "Provide cmdtyName"],
			},
			marketID: {
				type: String,
				required: [true, "Provide marketID"],
			},
			marketName: {
				type: String,
				required: [true, "Provide marketName"],
			},
			reportDetailsArray: {
				type: Array,
				default: [],
			},
		},
		{ timestamps: true }
	)
);
