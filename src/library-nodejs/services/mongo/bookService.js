const Book = require("../../models/mongoose/Book.js");

async function getAllBooks() {
	return await Book.find();
}

async function findBookById(id) {
	return await Book.findById(id);
}

async function findBooksByTitle(title) {
	return await Book.find({ title: { $regex: new RegExp(title, "i") }});
}

async function updateBook(id, book) {
	return await Book.updateOne({ id: id }, book);
}

async function deleteBook(id) {
	return await Book.deleteOne({ id: id });
}


module.exports = {

};