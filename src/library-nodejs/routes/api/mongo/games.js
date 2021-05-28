const router = require("express").Router();
const gameService = require("../../../services/mongo/gameService.js");

router.get("/api/mongo/games", async (req, res) => {
	let gameDocuments = await gameService.getAllBooks();
	let games = [];

	for (let index = 0; index < gameDocuments.length; index++) {
		let materialDocument = await materialService.findMaterialById(gameDocuments[index].materialId);
		let gameObject = gameDocuments[index].toObject();
		gameObject.material = materialDocument.toObject();
		games.push(gameObject);
	}
	return res.json(games);
});

router.get("/api/mongo/games/:id", async (req, res) => {
	const gameDocument = await gameService.findBookById(req.params.id);
	if (gameDocument) {
		let materialDocument = await materialService.findMaterialById(gameDocument.materialId);
		let gameObject = gameDocument.toObject();
		gameObject.material = materialDocument.toObject();
		return res.json(gameObject);
	}
	return res.status(204); //No Content
});

router.post("/api/mongo/games", async (req, res) => {
	const game = {
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
	const gameResult = await gameService.createGame(game);
	if (gameResult) {
		return res.json(gameResult);
	}
	return res.status(400);
});

router.put("/api/mongo/games/:id", async (req, res) => {
	const id = req.params.id;
	const updatedResult = await gameService.updateGame(id, req.body);

	if (updatedResult == 0) {
		return res.sendStatus(400);
	}
	return res.sendStatus(200);
});

router.delete("/api/mongo/games/:id", async (req, res) => {
	const id = req.params.id;
	const result = await gameService.deleteGame(id);
	
	if (result.ok) {
		return res.status(200);
	}
	return res.status(400);
});

module.exports = router;