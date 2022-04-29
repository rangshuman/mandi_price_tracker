import request from "supertest";
import CreateServer from "../app.js";
import mockData from "./mock-data.json";

const app = CreateServer("mandi-price-tracker-test");

const urlEndPointPost = "/reports";

describe("Report Controller", () => {
	it(`POST ${urlEndPointPost}`, async () => {
		const response = await request(app)
			.post(urlEndPointPost)
			.send(mockData);
		expect(response.statusCode).toBe(201);
	});
});
