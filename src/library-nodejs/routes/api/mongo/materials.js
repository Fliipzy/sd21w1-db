const router = require("express").Router();
const materialService = require("../../../services/mongo/materialService.js");

router.get("/api/mongo/materials", async (req, res) => {
	const materialDocuments = await materialService.getAllMaterials();
	return res.json(materialDocuments);
});

router.get("/api/mongo/materials/:id", async (req, res) => {
	const id = req.params.id;
	const materialDocument = await materialService.findMaterialById(id);

	if (!materialDocument) {
		return res.sendStatus(404);
	}
	return res.json(materialDocument);
});

module.exports = router;