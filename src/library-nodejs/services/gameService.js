const Game = require("../models/Game.js");

async function getAllGames(...relations) {
    const gamesQuery = Game.query();

    relations.forEach(relation => {
        gamesQuery.withGraphJoined(relation);
    });

    return gamesQuery;
}

async function getGameById(id, ...relations) {
    const gameQuery = Game.query()
        .findById(id);
    
    relations.forEach(relation => {
        gameQuery.withGraphJoined(relation);
    });

    return gameQuery;
}

async function updateGameById(id, game) {
    const result = await Game.query()
        .findById(id)
        .patch(
            game
        );

    return result;
}

async function deleteGameById(id) {
    const result = await Game.query()
        .deleteById(id);

    return result;
}

module.exports = {
    getAllGames: getAllGames,
    getGameById: getGameById,
    updateGameById: updateGameById,
    deleteGameById: deleteGameById
};