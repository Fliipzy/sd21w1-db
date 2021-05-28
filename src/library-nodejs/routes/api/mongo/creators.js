const router = require("express").Router();
const creatorService = require("../../../services/mongo/creatorService.js");

router.get("/api/mongo/creators", async (req, res) => {
	const creatorDocuments = await creatorService.getAllCreators();
	return res.json(creatorDocuments);
});

router.get("/api/mongo/creators/:id", async (req, res) => {
	const id = req.params.id;
	const creatorDocument = await creatorService.findCreatorById(id);

	if (!creatorDocument) {
		return res.sendStatus(404);
	}
	return res.json(creatorDocument);
});

module.exports = router;