const express = require("express");
const app = express();

app.use(express.json()); //json middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const config = require("./config/appConfig.js");

//express-session configuration
const session = require("express-session");
app.use(session(config.sessionConfig));

//knex configuration
const { Model } = require("objection");
const Knex = require("knex");
const knexfile = require("./knexfile.js");
const knex = Knex(knexfile.development);
Model.knex(knex);


//route configuration
app.use(require("./routes/controllers/index.js"));
app.use(require("./routes/api/auth.js"));

//setup middle routing for security (comment out for easier debugging)
/*app.use((req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/');
    }
    next();
});*/

app.use(require("./routes/api/materials.js"));
app.use(require("./routes/api/users.js"));

/*
const User = require("./models/user");
const User_Role = require("./models/user_role");
const User__user_role = require("./models/user__user_role");
const User_infomation = require("./models/user_infomation");
const Creator = require("./models/creator");
const Material_age_type = require("./models/material_age_type");
const Material_type = require("./models/material_type");
const Material = require("./models/material");
const Genre = require("./models/genre");
const Material_stock = require("./models/material_stock");
const Material__genre = require("./models/material__genre");
const Game_console_type = require("./models/game_console_type");
const Game = require("./models/game");


/** USER TEST - WORKING

async function testUser() {

const userDB = await User.query();
console.log(userDB);

}
testUser();
**/
/** USER_ROLE TEST - WORKING
async function testUserRole() {

	const userDB = await User_Role.query();
	console.log(userDB);
	
	}
	testUserRole();
**/
/** User__user_role TEST - WORKING
async function testUserUserRole() {

	const userDB = await User__user_role.query();
	console.log(userDB);
	
	}
	testUserUserRole();
**/
/** User_information TEST - WORKING

async function testUserInformation() {

	const userDB = await User_infomation.query();
	console.log(userDB);
	
	}
	testUserInformation();
**/
/** Creator TEST - WORKING

async function testCreator() {

	const userDB = await Creator.query();
	console.log(userDB);
	
	}
	testCreator();
**/
/** Material_age_type TEST - WORKING

async function testMaterial_age_type() {

	const userDB = await Material_age_type.query();
	console.log(userDB);
	
	}
	testMaterial_age_type();
**/
/** Material_type TEST - WORKING

async function testMaterial_type() {

	const userDB = await Material_type.query();
	console.log(userDB);
	
	}
	testMaterial_type();
**/
/** Material TEST - WORKING

async function testMaterial() {

	const userDB = await Material.query();
	console.log(userDB);
	
	}
	testMaterial();
**/
/** Genre TEST - WORKING

async function testGenre() {

	const userDB = await Genre.query();
	console.log(userDB);
	
	}
	testGenre();
**/
/** Material_stock TEST - WORKING

async function testMaterial_stock() {

	const userDB = await Material_stock.query();
	console.log(userDB);
	
	}
	testMaterial_stock();
**/
/** Material_genre TEST - WORKING

async function testMaterial__genre() {

	const userDB = await Material__genre.query();
	console.log(userDB);
	
	}
	testMaterial__genre();
**/
/** Game_console_type TEST - WORKING

async function testGame_console_type() {

	const userDB = await Game_console_type.query();
	console.log(userDB);
	
	}
	testGame_console_type();
**/
/** Game TEST - WORKING

async function testGame() {

	const userDB = await Game.query();
	console.log(userDB);
	
	}
	testGame();
**/

const serverPort = config.port;

app.listen(serverPort, (error) => {
	if (error) {
		console.log(error);
	}
	console.log(`listening on: ${serverPort}`);
});
