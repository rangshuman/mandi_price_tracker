import ReportDetailsModel from "../models/report-details.model.js";
import ReportsModel from "../models/reports.model.js";

const SaveReport = async (req, res, next) => {
	try {
		let reportData = await ReportDetailsModel.create(
			req.body.reportDetails
		);

		let checkReportExist = await ReportsModel.find({
			cmdtyID: req.body.reportDetails.cmdtyID,
			marketID: req.body.reportDetails.marketID,
		});

		if (checkReportExist.length > 0) {
			checkReportExist[0].reportDetailsArray.push(reportData._id);
			let updatedReport = await checkReportExist[0].save();
			res.status(201).json({
				status: "success",
				reportID: updatedReport._id,
			});
		} else {
			let updatedReport = await ReportsModel.create({
				cmdtyID: req.body.reportDetails.cmdtyID,
				cmdtyName: req.body.reportDetails.cmdtyName,
				marketID: req.body.reportDetails.marketID,
				marketName: req.body.reportDetails.marketName,
				reportDetailsArray: [reportData._id],
			});
			res.status(201).json({
				status: "success",
				reportID: updatedReport._id,
			});
		}
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const GetReport = async (req, res, next) => {
	try {
		let reportExist = await ReportsModel.findById(req.params.id).lean();
		if (reportExist != null) {
			// get all users and calculate mean prices
			let data = await ReportDetailsModel.find({
				_id: { $in: reportExist.reportDetailsArray },
			});
			let userArray = data.map((element) => element.userID);
			let totalQuantity = data.reduce((acc, element) => {
				return acc + element.convFctr;
			}, 0);
			let totalPrice = data.reduce((acc, element) => {
				return acc + element.price;
			}, 0);
			let meanPrice = totalPrice / totalQuantity;

			let resData = {
				...reportExist,
				users: userArray,
				priceUnit: "Kg",
				price: meanPrice,
			};

			delete resData.reportDetailsArray;
			delete resData.updatedAt;

			res.status(200).json(resData);
		} else {
			res.status(400).json({ message: "report doesn't exist." });
		}
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const ReportControllers = {
	SaveReport,
	GetReport,
};

export default ReportControllers;
