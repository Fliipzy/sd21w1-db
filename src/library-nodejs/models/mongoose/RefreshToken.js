const mongoose = require("mongoose");

const refreshTokenSchema = new mongoose.Schema({
	token: {
		type: String,
		required: true
	},
	userId: {
		type: Number,
		required: true
	}
}, { timestamps: true });

const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);

module.exports = RefreshToken;