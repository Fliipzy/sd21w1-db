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

async function deleteUser(id) {
	return await User.deleteOne({ id: id });
}

module.exports = {
	getAllUsers: getAllUsers,
	findUserById: findUserById,
	createUser: createUser,
	updateUser: updateUser,
	deleteUser: deleteUser
};