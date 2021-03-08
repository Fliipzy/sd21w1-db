const express = require("express");
const app = express();
const { Model } = require("objection");
const Knex = require("knex");
const knexfile = require("./knexfile.js");

const serverPort = process.env.PORT || 4000;

const knex = Knex(knexfile.development);
Model.knex(knex);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const User = require("./models/User");

async function testUser() {

const userDB = await User.query();
console.log(userDB);

}

testUser();



app.listen(serverPort, (error) => {
	if (error) {
		console.log(error);
	}
	console.log(`listening on: ${serverPort}`);
});
