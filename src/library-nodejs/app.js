const express = require("express");
const app = express();

app.use(express.json());
app.use(require('cookie-parser')())
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const config = require("./config/appConfig.js");


// knex & objection configuration
const { Model } = require("objection");
const Knex = require("knex");
const knexfile = require("./knexfile.js");
const knex = Knex(knexfile.development);
Model.knex(knex);

// route configuration
// it's important these routings happens in this exact order

app.use(require("./routes/controllers/index.js"));
app.use(require("./routes/controllers/auth.js"));
app.use(require("./routes/api/auth.js"));

// middleware for verifying the json web token
app.use(require("./services/authService").verifyToken);

app.use(require("./routes/api/materials.js"));
app.use(require("./routes/api/users.js"));
app.use(require("./routes/api/books.js"));
app.use(require("./routes/api/movies.js"));
app.use(require("./routes/api/games.js"));
app.use(require("./routes/api/storedProcedure.js"));


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const serverPort = config.port;

app.listen(serverPort, (error) => {
	if (error) {
		console.log(error);
	}
	console.log(`listening on: ${serverPort}`);
});