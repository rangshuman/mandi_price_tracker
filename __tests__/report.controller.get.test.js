import request from "supertest";
import CreateServer from "../app.js";
import mockData from "./mock-data.json";

const app = CreateServer("mandi-price-tracker-test");
const urlEndPointPost = "/reports";

describe("Report Controller", () => {
	beforeAll(async () => {
		let id = {};
		const data = await request(app).post(urlEndPointPost).send(mockData);
		Object.assign(data.body, id);
		console.log(id);
	});
	it(`GET /reports/:id`, async () => {
		const response = await request(app)
			.get(`/reports/${id.reportID}`)
			.send();
		expect(response.body.reportID).toMatch("626c00839a74a39b0d27180f");
	});
});
