const router = require("express").Router();
const bookService = require('../../services/bookService.js');

router.get("/api/books", async (req, res) => {
    const books = await bookService.getAllBooks();
});

router.get("/api/books/:id", (req, res) => {
    const {id} = req.params;
});

router.post("/api/books", async (req, res) => {
    const { isbn13, pages, edition, creators, title, description, releaseDate,
            materialImageHeader } = req.body;

    const book = {
        isbn13: isbn13,
        pages: pages,
        edition: edition,
        material: {
            title: title,
            description: description,
            releaseDate: new Date(releaseDate),
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

router.put("/api/books/:id", (req, res) => {
    const {id} = req.params;
});

module.exports = router;