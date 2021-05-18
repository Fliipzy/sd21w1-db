const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	active: {
		type: Boolean,
		required: true,
		default: true
	},
	roles: [{
		type: String,
		required: true
	}],
	userInformation: {
		birthDate: {
			type: Date,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		phoneNumber: {
			type: String,
			required: true
		}
	}
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;