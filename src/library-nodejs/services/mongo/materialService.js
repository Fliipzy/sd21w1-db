const Material = require("../../models/mongoose/Material.js");

async function getAllMaterials() {
	return await Material.find();
}

async function findMaterialById(id) {
	return await Material.findById(id);
}

async function findMaterialsByTitle(title) {
	return await Material.find({ title: { $regex: new RegExp(title, "i") }});
}

async function createMaterial(material) {
	return await Material.create(material);
}

module.exports = {
	getAllMaterials: getAllMaterials,
	findMaterialById: findMaterialById,
	findMaterialsByTitle: findMaterialsByTitle,
	createMaterial: createMaterial
};