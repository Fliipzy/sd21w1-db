const mongoose = require("mongoose");
const Material = require("./Material.js");

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

// cascading delete middleware
bookSchema.pre("deleteOne", { document: true, query: false }, async function (next) {
	const materialDocument = await Material.findOne({ _id: this.materialId });
	await materialDocument.deleteOne();
	next();
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;