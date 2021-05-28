const mongoose = require("mongoose");
const Material = require("./Material.js");

const gameSchema = new mongoose.Schema({
	consoleType: {
		type: String,
		required: true
	},
	materialId: {
		type: mongoose.Types.ObjectId,
		required: true
	}
}, { timestamps: true });

// cascading delete middleware
gameSchema.pre("deleteOne", {document: true, query: false }, async function (next) {
	const materialDocument = await Material.findOne({ _id: this.materialId });
	await materialDocument.deleteOne();
	next();
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;