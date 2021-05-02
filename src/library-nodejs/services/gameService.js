const Game = require("../models/Game.js");
const Creator = require("../models/Creator.js");

async function createGame(game = { gameConsoleTypeId, material: { title, description, releaseDate, materialTypeId }, creators: {} }) {
    try {
        /* im sure this is not the smartest way of making sure that each creator doesn't
            contain the name property IF that creator already exists in the DB. (creator.name 
            varchar column is unique)
        */
        for (let index = 0; index < game.creators.length; index++) {
            const creatorEntity = await Creator.query()
                .where("name", game.creators[index].name).first();

            if (creatorEntity) {
                delete game.creators[index].name;
                game.creators[index].id = creatorEntity.id;
            }
        }

        const trxResult = await Game.transaction(async trx => {
            try {
                const result = await Game.query(trx).insertGraph(game, { relate: true });
                return result;
            } catch (error) {
                trx.rollback();
                console.log(error);
            }
        });

        return trxResult;
        
    } catch (error) {
        console.log(error)
        return null;
    }
}

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
    const book = await Game.query()
        .findById(id);
    
    const result = await Material.query()
        .delete()
        .where('id', book.materialId);

    return result;
}

module.exports = {
    createGame: createGame,
    getAllGames: getAllGames,
    getGameById: getGameById,
    updateGameById: updateGameById,
    deleteGameById: deleteGameById
};