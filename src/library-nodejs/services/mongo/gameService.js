const Game = require("../../models/mongoose/Game.js");
const materialService = require("./materialService.js");

async function getAllGames() {
	return await Game.find();
}

async function findGameById(id) {
	return await Game.findById(id);
}

async function findGamesByTitle(title) {
	return await Game.find({ title: { $regex: new RegExp(title, "i") }});
}

async function createGame(game) {
	const material = game.material;
	delete game.material;

	const creatorIds = [];

	for (let index = 0; index < material.creators.length; index++) {
		const creatorName = material.creators[index];
		const creator = await Creator.findOne({ name: creatorName });
		
		if (creator) {
			creatorIds.push(creator._id);
			continue;
		}

		const newCreator = await Creator.create({ name: creatorName });
		creatorIds.push(newCreator._id);
	}

	material.creators = creatorIds;
	const newMaterial = await materialService.createMaterial(material);

	if (newMaterial) {
		game.materialId = newMaterial._id;
		return await Game.create(game);
	}
	return null;
}

async function updateGame(id, game) {
	return await Game.updateOne({ _id: id }, game);
}

async function deleteGame(id) {
	const gameDocument = await Game.findOne({ _id: id });
	return await gameDocument.deleteOne({ _id: id });
}


module.exports = {
	getAllGames: getAllGames,
	findGameById: findGameById,
	findGamesByTitle: findGamesByTitle,
	createGame: createGame,
	updateGame: updateGame,
	deleteGame: deleteGame
};