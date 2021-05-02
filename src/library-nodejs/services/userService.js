const User = require("../models/User");
const bcrypt = require("bcrypt");
const { bcryptConfig } = require("../config/appConfig.js");

async function createUser(user = { username, password, userInformation: { birthDate, email, phoneNumber }}) {
	try {
		// hash password
		user.loginCredentials.password = await bcrypt.hash(user.loginCredentials.password, bcryptConfig.saltRounds);

		// try inserting the user data with transaction
		const trxResult = await User.transaction(async trx => {
			try {
				// insert with graph to handle both user & user_information in one call
				const result = await User.query(trx)
					.insertGraph(user);

				// handle stuff here that needs to happen if user is created successfully
				if (result) {
					
				}
				return result;
			}
			// rollback transaction if an error occurs
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

async function getUserById(id, ...relations) {
	const userQuery = User.query()
		.findById(id);
	
	// join specified relations
	relations.forEach(relation => {
		userQuery.withGraphJoined(relation);
	});

	return userQuery;
}

async function getAllUsers(...relations) {
	const userQuery = User.query();

	//join specified relations
	relations.forEach(relation => {
		userQuery.withGraphJoined(relation);
	});

	return userQuery;
}

async function changeUserActiveStatusById(id, activeStatus) {
	return User.query()
		.findById(id)
		.patch({
			active: activeStatus
		});
}

async function changeUserPasswordById(id, password) {
	// hash the new password
	const newPassword = await bcrypt.hash(password, bcryptConfig.saltRounds);

	// insert new password into the specified user
	return User.query()
		.findById(id)
		.patch({
			password: newPassword
		});
}

module.exports = {
	createUser: createUser,
	getAllUsers: getAllUsers,
	getUserById: getUserById,
	changeUserActiveStatusById: changeUserActiveStatusById,
	changeUserPasswordById: changeUserPasswordById
}