const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
	edition: {
		type: String
	},
	isbn13: {
		type: String,
		required: true,
		unique: true,
		minLength: 13,
		maxLength: 13
	},
	pages: {
		type: Number,
		required: true
	},
	materialId: {
		type: mongoose.Types.ObjectId,
		required: true
	}
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;