const mongoose = require("mongoose");

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

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;