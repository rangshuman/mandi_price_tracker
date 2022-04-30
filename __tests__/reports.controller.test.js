// importing dependencies
import app from "../app.js";
import request from "supertest";
import mongoose from "mongoose";

// importing mock data to send
import mockData from "./mock-data.json";

// connecting to db
mongoose.connect("mongodb://localhost/mandi-price-tracker-test");

describe("Report Controller", () => {
	it("has a module", () => {
		expect(app).toBeDefined();
	});

	let server;
	const urlEndPointPost = "/reports";

	const GetId = async () => {
		const response = await request(server)
			.post(urlEndPointPost)
			.send(mockData);
		const id = response.body.reportID;
		return id;
	};

	beforeAll(() => {
		server = app.listen(3001);
	});

	afterAll(async () => {
		await mongoose.connection.db.dropDatabase();
		await mongoose.connection.close();
		server.close();
	});

	it(`POST ${urlEndPointPost}`, async () => {
		const response = await request(server)
			.post(urlEndPointPost)
			.send(mockData);
		expect(response.statusCode).toBe(201);
	});

	it(`GET /reports/:id`, async () => {
		const id = await GetId();
		const response = await request(app).get(`/reports/${id}`).send();
		expect(response.body._id).toMatch(id);
	});
});
