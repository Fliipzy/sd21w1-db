const mongoose = require("mongoose");

const creatorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String
	}
});

const Creator = mongoose.model("Creator", creatorSchema);

module.exports = Creator;