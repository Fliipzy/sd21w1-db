const Book = require("../../models/mongoose/Book.js");
const Creator = require("../../models/mongoose/Creator.js");
const materialService = require("./materialService.js");

async function getAllBooks() {
	return await Book.find();
}

async function findBookById(id) {
	return await Book.findById(id);
}

async function findBooksByTitle(title) {
	return await Book.find({ title: { $regex: new RegExp(title, "i") }});
}

async function createBook(book) {

	let material = book.material;
	delete book.material;
	let creatorIds = [];


	for (let index = 0; index < material.creators.length; index++) {
		const creatorName = material.creators[index];
		const creator = await Creator.findOne({ name: creatorName });
		
		if (creator) {
			creatorIds.push(creator._id);
			continue;
		}

		const newCreator = await Creator.create({ name: creatorName });
		creatorIds.push(newCreator._id);
	}

	material.creators = creatorIds;
	const newMaterial = await materialService.createMaterial(material);

	if (newMaterial) {
		book.materialId = newMaterial._id;
		return await Book.create(book);
	}
	return null;
}

async function updateBook(id, book) {
	return await Book.updateOne({ id: id }, book);
}

async function deleteBook(id) {
	return await Book.deleteOne({ id: id });
}


module.exports = {
	getAllBooks: getAllBooks,
	findBookById: findBookById,
	findBooksByTitle: findBooksByTitle,
	createBook: createBook,
	updateBook: updateBook,
	deleteBook: deleteBook
};