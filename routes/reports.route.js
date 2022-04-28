import express from "express";
const router = express.Router();
import ReportControllers from "../controllers/reports.controller.js";

router.route("/reports").post(ReportControllers.SaveReport);
router.route("/reports/:id").get(ReportControllers.GetReport);

export default router;
