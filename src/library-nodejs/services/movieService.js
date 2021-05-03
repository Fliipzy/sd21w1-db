const Movie = require("../models/Movie.js");
const Creator = require("../models/Creator.js");
const Material = require("../models/Material.js");

async function createMovie(movie = { length, formatTypeId, material: { title, description, releaseDate, materialTypeId, materialImageHeader }, creators: {} }) {
    try {
        /* im sure this is not the smartest way of making sure that each creator doesn't
            contain the name property IF that creator already exists in the DB. (creator.name 
            varchar column is unique)
        */
        for (let index = 0; index < movie.creators.length; index++) {
            const creatorEntity = await Creator.query()
                .where("name", movie.creators[index].name).first();

            if (creatorEntity) {
                delete game.creators[index].name;
                movie.creators[index].id = creatorEntity.id;
            }
        }

        const trxResult = await Movie.transaction(async trx => {
            try {
                const result = await Movie.query(trx).insertGraph(movie, { relate: true });
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

async function getAllMovies(...relations) {
    const moviesQuery = Movie.query();

    relations.forEach(relation => {
        moviesQuery.withGraphJoined(relation);
    });

    return moviesQuery;
}

async function getMovieById(id, ...relations) {
    const movieQuery = Movie.query()
        .findById(id);
    
    relations.forEach(relation => {
        movieQuery.withGraphJoined(relation);
    });

    return movieQuery;
}

async function updateMovieById(id, movie) {
    const result = await Movie.query()
        .findById(id)
        .patch(
            movie
        );

    return result;
}

async function deleteMovieById(id) {
    const movie = await Movie.query()
        .findById(id);
    
    const result = await Material.query()
        .delete()
        .where('id', movie.materialId);

    return result;
}

module.exports = {
    createMovie: createMovie,
    getAllMovies: getAllMovies,
    getMovieById: getMovieById,
    updateMovieById: updateMovieById,
    deleteMovieById: deleteMovieById
};