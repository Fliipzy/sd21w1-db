const mongoose = require("mongoose");
const Creator = require("./Creator.js");

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
		type: Number,
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

materialSchema.pre("deleteOne", { document: true, query: false }, async function (next) {
	const creatorIds = this.creators;

	//Delete creator(s) if they only occur in this material
	creatorIds.forEach(async creatorId => {
		const occurrences = await Material.countDocuments({ creators: creatorId });
		if (occurrences == 1) {
			await Creator.deleteOne({ _id: creatorId });
		}
	});
	next();
});

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;