const Book = require("../models/Book.js");
const Creator = require("../models/Creator.js");
const Material = require("../models/Material.js");
const User = require("../models/User.js");

async function createBook(book = { material: { title, description, releaseDate, materialTypeId }, creators: {}, isbn13, pages, edition, materialId }) {
    try {

        /*  im sure this is not the smartest way of making sure that each creator doesn't 
            contain the name property IF that creator already exists in the DB. (creator.name 
            varchar column is unique)
        */
        for (let index = 0; index < book.creators.length; index++) {
            const creatorEntity = await Creator.query()
                .where("name", book.creators[index].name).first();

            if (creatorEntity) {
                delete book.creators[index].name;
                book.creators[index].id = creatorEntity.id;
            }
        }

        const trxResult = await Book.transaction(async trx => {
            try {
                const result = await Book.query(trx)
                    .insertGraph(book, {relate: true});
                return result;
            } catch (error) {
                trx.rollback();
                console.log(error);
            }
        });

        return trxResult;

    } catch (error) {
        console.log(error)
        return null;
    }
}

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

    return await bookQuery;
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
    const book = await Book.query()
        .findById(id);
    
    const result = await Material.query()
        .delete()
        .where('id', book.materialId);

    return result;
}

module.exports = {
    createBook: createBook,
    getAllBooks: getAllBooks,
    getBookById: getBookById,
    updateBookById: updateBookById,
    deleteBookById: deleteBookById
};