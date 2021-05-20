const router = require("express").Router();
const movieService = require("../../../services/mongo/movieService.js");

router.get("/api/mongo/movies", async (req, res) => {
	let movieDocuments = await movieService.getAllBooks();
	let movies = [];

	for (let index = 0; index < movieDocuments.length; index++) {
		let materialDocument = await materialService.findMaterialById(movieDocuments[index].materialId);
		let movieObject = movieDocuments[index].toObject();
		movieObject.material = materialDocument.toObject();
		movies.push(movieObject);
	}
	return res.json(movies);
});

router.get("/api/mongo/movies/:id", async (req, res) => {
	const movieDocument = await movieService.findBookById(req.params.id);
	if (movieDocument) {
		let materialDocument = await materialService.findMaterialById(movieDocument.materialId);
		let movieObject = movieDocument.toObject();
		movieObject.material = materialDocument.toObject();
		return res.json(movieObject);
	}
	return res.status(204); //No Content
});

router.post("/api/mongo/movies", async (req, res) => {
	const movie = {
		consoleType: req.body.consoleType,
		material: {
			title: req.body.material.title,
			description: req.body.material.description,
			releaseDate: new Date(req.body.material.releaseDate),
			materialImageHeader: req.body.material.materialImageHeader,
			creators: req.body.material.creators,
			materialType: 3
		}
	};
	const movieResult = await movieService.createMovie(movie);
	if (movieResult) {
		return res.json(movieResult);
	}
	return res.status(400);
});

router.put("/api/mongo/movies/:id", async (req, res) => {
	const id = req.params.id;
	const movieDocument = await movieService.updateBook(id, req.body);

	if (movieDocument) {
		let materialDocument = await materialService.findMaterialById(movieDocument.materialId);
		let movieObject = movieDocument.toObject();
		movieObject.material = materialDocument.toObject();
		return res.json(movieObject);
	}
	return res.status(400);
});

router.delete("/api/mongo/movies/:id", async (req, res) => {
	const id = req.params.id;
	const result = await movieService.deleteMovie(id);
	
	if (result.ok) {
		return res.status(200);
	}
	return res.status(400);
});

module.exports = router;