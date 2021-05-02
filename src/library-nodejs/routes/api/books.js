const router = require("express").Router();
const { json } = require("express");
const bookService = require('../../services/bookService.js');

router.get("/api/books", async (req, res) => {
    const books = await bookService.getAllBooks();
    return res.status(200).json(books);
});

router.get("/api/books/:id", async (req, res) => {
    const { id } = req.params;
    const result = await bookService.getBookById(id);
    return res.status(200).json(result);
});

router.post("/api/books", async (req, res) => {
    let { isbn13, pages, edition, creators, title, description, releaseDate,
            materialImageHeader } = req.body;

    let book = {
        isbn13: isbn13,
        pages: pages,
        edition: edition,
        material: {
            title: title,
            description: description,
            releaseDate: new Date(releaseDate),
            materialTypeId: 1,
            materialImageHeader: materialImageHeader
        },
        creators: creators
    }

    const result = await (await bookService.createBook(book));

    if (result) {
        return res.status(200).json(result);
    } 

    return res.status(400).json({response: "bad request"});
});

router.put("/api/books/:id", async (req, res) => {
    const { id } = req.params;
    const { isbn13, edition, pages } = req.body;

    const result = await bookService.updateBookById(id, { isbn13, edition, pages });
    return res.status(200).json(result);
});

router.delete("/api/books/:id", async (req, res) => {
    const { id } = req.params;
    const result = await bookService.deleteBookById(id);
    return res.status(200).json(result);
});

module.exports = router;