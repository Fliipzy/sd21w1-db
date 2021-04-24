const Book = require("../models/Book.js");

async function getAllBooks(...relations) {
    const booksQuery = Book.query();

    relations.forEach(relation => {
        booksQuery.withGraphJoined(relation);
    });

    return booksQuery;
}

async function getBookById(id, ...relations) {
    const bookQuery = Book.query()
        .findById(id);
    
    relations.forEach(relation => {
        bookQuery.withGraphJoined(relation);
    });

    return bookQuery;
}

async function updateBookById(id, book) {
    const result = await Book.query()
        .findById(id)
        .patch(
            book
        );

    return result;
}

async function deleteBookById(id) {
    const result = await Book.query()
        .deleteById(id);

    return result;
}

module.exports = {
    getAllBooks: getAllBooks,
    getBookById: getBookById,
    updateBookById: updateBookById,
    deleteBookById: deleteBookById
};