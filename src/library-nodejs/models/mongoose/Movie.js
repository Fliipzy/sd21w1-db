const mongoose = require("mongoose");

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

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;