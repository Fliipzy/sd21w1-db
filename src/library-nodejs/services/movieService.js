const Movie = require("../models/Movie.js");

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
    const result = await Movie.query()
        .deleteById(id);

    return result;
}

module.exports = {
    getAllMovies: getAllMovies,
    getMovieById: getMovieById,
    updateMovieById: updateMovieById,
    deleteMovieById: deleteMovieById
};