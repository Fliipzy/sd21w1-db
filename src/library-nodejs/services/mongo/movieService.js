const Movie = require("../../models/mongoose/Movie.js");


async function getAllMovies() {
	return await Movie.find();
}

async function findMovieById(id) {
	return await Movie.findById(id);
}

async function findMoviesByTitle(title) {
	return await Movie.find({ title: { $regex: new RegExp(title, "i") }});
}

async function createMovie(movie) {
	return await Movie.create(movie);
}

async function updateMovie(id, movie) {
	return await Movie.updateOne({ id: id }, movie);
}

async function deleteMovie(id) {
	const movieDocument = await Movie.findOne({ _id: id });
	return await movieDocument.deleteOne({ _id: id });
}


module.exports = {
	getAllMovies: getAllMovies,
	findMovieById: findMovieById,
	findMoviesByTitle: findMoviesByTitle,
	createMovie: createMovie,
	updateMovie: updateMovie,
	deleteMovie: deleteMovie
};