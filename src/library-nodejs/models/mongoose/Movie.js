const mongoose = require("mongoose");
const Material = require("./Material.js");

const movieSchema = new mongoose.Schema({
	length: {
		type: Number,
		required: true
	},
	formatType: {
		type: String,
		required: true
	},
	materialId: {
		type: mongoose.Types.ObjectId,
		required: true
	}
}, { timestamps: true });

// cascading delete middleware
movieSchema.pre("deleteOne", {document: true, query: false }, async function (next) {
	const materialDocument = await Material.findOne({ _id: this.materialId });
	await materialDocument.deleteOne();
	next();
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;