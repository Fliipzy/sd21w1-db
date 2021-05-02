const bcrypt = require("bcrypt");
const Users = require("../models/User.js");
const { bcryptConfig } = require("../config/appConfig.js");

async function authenticate(username, password) {
	try {
		// fetch the user by username
		let user = await Users.query()
			.first()
			.where("username", username)
			.andWhere("active", 1);

		if (user) {
			// compare hashed passwords
			let bcryptResult = await bcrypt.compare(password, user.password);

			// if passwords matched
			if (bcryptResult) {
				// fetch user roles for authenticated user
				let roles = await Users
					.relatedQuery("roles")
					.for(Users.query()
						.findById(user.id));
				
				// return user.id & roles, used for inserting into session object
				return { id: user.id, roles: roles.map(role => role.role) };
			}
		}
	} catch (exception) {
		console.log(exception);
	}
	return null;
}

module.exports = {
	authenticate: authenticate
}