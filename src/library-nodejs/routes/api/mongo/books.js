const router = require("express").Router();
const bookService = require("../../../services/mongo/bookService.js");
const materialService = require("../../../services/mongo/materialService.js");

router.get("/api/mongo/books", async (req, res) => {
	let bookDocuments = await bookService.getAllBooks();
	let books = [];

	for (let index = 0; index < bookDocuments.length; index++) {
		let materialDocument = await materialService.findMaterialById(bookDocuments[index].materialId);
		let bookObject = bookDocuments[index].toObject();
		bookObject.material = materialDocument.toObject();
		books.push(bookObject);
	}
	return res.json(books);
});

router.get("/api/mongo/books/:id", async (req, res) => {
	const bookDocument = await bookService.findBookById(req.params.id);
	if (bookDocument) {
		let materialDocument = await materialService.findMaterialById(bookDocument.materialId);
		let bookObject = bookDocument.toObject();
		bookObject.material = materialDocument.toObject();
		return res.json(bookObject);
	}
	return res.sendStatus(204); //No Content
});

router.post("/api/mongo/books", async (req, res) => {

	const bookObject = {
		isbn13: req.body.isbn13,
		pages: req.body.pages,
		edition: req.body.edition,
		material: {
			title: req.body.material.title,
			description: req.body.material.description,
			releaseDate: new Date(req.body.material.releaseDate),
			materialImageHeader: req.body.material.materialImageHeader,
			creators: req.body.material.creators,
			materialType: 1
		}
	};
	try {
		const book = await bookService.createBook(bookObject);

		if (book) {
			book.material = await materialService.findMaterialById(book._id);
			return res.json(book);
		}
	} catch (error) {
		console.log(error);
	}
	return res.sendStatus(400); //Bad Request
});

router.put("/api/mongo/books/:id", async (req, res) => {
	const id = req.params.id;
	const updateResult = await bookService.updateBook(id, req.body);

	if (updateResult.nModified == 0) {
		return res.sendStatus(400);
	}
	return res.sendStatus(200);
});

router.delete("/api/mongo/books/:id", async (req, res) => {
	const id = req.params.id;
	const result = await bookService.deleteBook(id);
	
	if (result.deletedCount == 0) {
		return res.sendStatus(400);
	}
	return res.sendStatus(200);
});

module.exports = router;