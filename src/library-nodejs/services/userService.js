const User = require("../models/user");

async function getAllUsers() {
	return await User.query();
}

async function getUserById(id) {
	return await User.query()
		.findById(id);
}