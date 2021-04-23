const Users = require("../models/User");
const bcrypt = require("bcrypt");
const { bcryptConfig } = require("../config/appConfig.js");

async function createUser(user = { username, password, userInformation: { birthDate, email, phoneNumber }}) {
	try {
		//Hash password
		user.loginCredentials.password = await bcrypt.hash(user.loginCredentials.password, bcryptConfig.saltRounds);

		//Try inserting the user data with transaction
		const trxResult = await Users.transaction(async trx => {
			try {
				//Insert with graph to handle both user & user_information in one call
				const result = await Users.query(trx).insertGraph(user);

				//Handle stuff here that needs to happen if user is successfully created
				if (result) {
					
				}
				return result;
			}
			//Rollback transaction if an error occurs
			catch (error) {
				trx.rollback();
			}
		});
		return trxResult;

	} catch (exception) {
		console.log(exception);
		return null;
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

module.exports = {
	createUser: createUser,
	getAllUsers: getAllUsers,
	getUserById: getUserById,
	activateUserById: activateUserById,
	deactivateUserById: deactivateUserById
}