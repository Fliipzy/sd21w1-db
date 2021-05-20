const User = require("../../models/mongoose/User.js");

async function getAllUsers() {
	return await User.find();
}

async function findUserById(id) {
	return await User.findById(id);
}

async function createUser(user) {
	return await User.create(user);
}

async function updateUser(id, user) {
	return await User.updateOne({ id: id }, user);
}

module.exports = {
	getAllUsers: getAllUsers,
	findUserById: findUserById,
	createUser: createUser,
	updateUser: updateUser
};