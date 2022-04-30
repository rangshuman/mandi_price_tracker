# Mandi Price Tracker

A dummy Node.js backend application that returns an aggregated report on the current pricing of a market commodity.

## Authors

-   [@rangshuman](https://www.github.com/rangshuman)

## Tech Stack

**Server:** Node, Express, MongoDb, Jest, Supertest Git

## Features

-   Save report details to database.
-   Query aggregated average market price of any commodity.

## Run Locally

-   Clone the project

```bash
  git clone https://github.com/rangshuman/mandi_price_tracker.git
```

-   Go to the project directory

```bash
  cd your-project-directory
```

-   Install all dependencies

```bash
  npm install
```

-   Create a .env file in the root of the project directory with your own inputs:

```env
PORT=<port of your own choice eg: 3000, 8080 etc.>
DATABASE_URL=<your mongodb database url>
```

-   Open terminal from the root directory of the project and enter these commands:

```bash
npm run start
```

-   After the server is running you will see this message:

```bash
Server Started at PORT: 3000
Connected to the Database. Name: Dev-Db
```

Once all the above steps are completed the Node app is now ready to accept incoming requests. Now you can use any api testing application like Postman or Thunder Client to ping the api endpoints of this Node app.

## API Reference

-   #### POST

```http
  POST /reports
```

| Parameter       | Type   | Description                                         |
| :-------------- | :----- | :-------------------------------------------------- |
| `reportDetails` | `json` | **Required**. Json data to be saved in the database |

#### Request

```json
{
	"reportDetails": {
		"userID": "user-1",
		"marketID": "market-1",
		"marketName": "Vashi Navi Mumbai",
		"cmdtyID": "cmdty-1",
		"marketType": "Mandi",
		"cmdtyName": "Potato",
		"priceUnit": "Kilo",
		"convFctr": 1,
		"price": 16
	}
}
```

#### Response

```json
{
	"status": "success",
	"reportID": "[someID]"
}
```

Ping the POST api route a few time with varying values in ` userID, priceUnit, convFctr, price`. Everytime you should recieve the same `reportID` in the response object.

![App Screenshot](https://ik.imagekit.io/angshumanroy/Mandi_Price_Tracker_ss/post_3kdl7axCm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651339988916)

-   #### GET

Use the `reportID` recieved from the POST api as `id` to query the GET route.

```http
  GET /reports/[id]
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Response

```json
{
	"_id": "[someID]",
	"cmdtyID": "cmdty-1",
	"cmdtyName": "Potato",
	"marketID": "market-1",
	"marketName": "Vashi Navi Mumbai",
	"createdAt": "2022-04-28T18:06:25.523Z",
	"__v": 2,
	"users": ["user-1", "user-2", "user-3"],
	"priceUnit": "Kg",
	"price": 15.33774834437086
}
```

![App Screenshot](https://ik.imagekit.io/angshumanroy/Mandi_Price_Tracker_ss/get_ggaFX9-LS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651339988881)

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

![App Screenshot](https://ik.imagekit.io/angshumanroy/Mandi_Price_Tracker_ss/test_5p6GI4Ojm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651340226666)
