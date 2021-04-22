const Users = require("../models/user");
const bcrypt = require("bcrypt");
const { bcryptConfig } = require("../config/appConfig.js");

async function createUser(user = { username, password, userInformation: { birthDate, email, phoneNumber }}) {
	try {
		//Hash password
		user.loginCredentials.password = await bcrypt.hash(user.loginCredentials.password, bcryptConfig.saltRounds);

		//Try inserting the user data with transaction
		const newUserTrxResult = await Users.transaction(async trx => {
			try {
				//Insert user with user information 
				const result = await Users.query(trx).insertGraph(user);

				//Handle stuff here that needs to happen if user is successfully created
				if (result) {
					
				}
				
				return result;

			} catch (error) {
				trx.rollback();
			}
		});

		return newUserTrxResult;

	} catch (exception) {
		console.log(exception);
	}
}

async function getAllUsers() {
	return await Users.query();
}

async function getUserById(id) {
	return await Users.query()
		.findById(id);
}

async function activateUserById(id) {
	return await Users.query()
		.findById(id)
		.patch({
			active: 1
		});
}

async function deactivateUserById(id) {
	return await Users.query()
		.findById(id)
		.patch({
			active: 0
		});
}