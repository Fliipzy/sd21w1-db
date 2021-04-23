const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const config = require("./config/appConfig.js");

//express-session configuration
const session = require("express-session");
app.use(session(config.sessionConfig));

//knex & objection configuration
const { Model } = require("objection");
const Knex = require("knex");
const knexfile = require("./knexfile.js");
const knex = Knex(knexfile.development);
Model.knex(knex);

//route configuration
app.use(require("./routes/controllers/index.js"));
app.use(require("./routes/controllers/auth.js"));
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

const serverPort = config.port;

app.listen(serverPort, (error) => {
	if (error) {
		console.log(error);
	}
	console.log(`listening on: ${serverPort}`);
});
