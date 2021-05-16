const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	releaseDate: {
		type: Date,
		required: true
	},
	materialHeaderImage: {
		type: String
	},
	materialType: {
		type: mongoose.Types.ObjectId,
		ref: "MaterialType",
		required: true
	},
	materialAgeType: {
		type: mongoose.Types.ObjectId,
		ref: "MaterialAgeType",
	},
	creators: [{
		type: mongoose.Types.ObjectId,
		ref: "Creator",
		required: true
	}]
}, { timestamps: true });

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;