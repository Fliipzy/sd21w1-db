const Creator = require("../../models/mongoose/Creator.js");

async function getAllCreators() {
	return await Creator.find();
}

async function findCreatorById(id) {
	return await Creator.findById(id);
}

module.exports = {
	getAllCreators: getAllCreators,
	findCreatorById: findCreatorById,
};