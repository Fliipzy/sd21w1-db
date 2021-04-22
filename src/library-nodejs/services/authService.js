const bcrypt = require("bcrypt");
const Users = require("../models/User.js");
const { bcryptConfig } = require("../config/appConfig.js");

async function authenticate(username, password) {
	//Fetch the user by username
	let user = await Users.query()
		.first()
		.where("username", username)
		.andWhere("active", 1)
	
	if (user) {
		//Compare hashed passwords
		let bcryptResult = await bcrypt.compare(password, user.password);

		//If passwords matched
		if (bcryptResult) {
			//Initialize result object we'll return
			let result = { user: user, roles: [] };

			//Fetch user roles for authenticated user
			let roles = await Users
				.relatedQuery("roles")
				.for(Users.query()
					.findById(user.id));
		}
	}
}