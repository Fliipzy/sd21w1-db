const { Model } = require("objection");
const Knex = require("knex");
const knexfile = require("../knexfile.js");
const knex = Knex(knexfile.development);
Model.knex(knex);

async function gameAddSP(
  game = {
    title,
    description,
    release_date,
    age_restriction_type,
    game_console_type,
    creator,
  }
) {
  return await knex.raw(
    `call bibliotek.usp_game_add('${game.title}', '${game.description}', '${game.release_date}', '${game.age_restriction_type}' , '${game.game_console_type}', '${game.creator}');`
  );
}

async function movieAddSP(
  movie = {
    title,
    description,
    release_date,
    age_restriction_type,
    length,
    format_type,
    creator,
  }
) {
  return await knex.raw(
    `call bibliotek.usp_movie_add('${movie.title}', '${movie.description}', '${movie.release_date}', '${movie.age_restriction_type}' , '${movie.length}', '${movie.format_type}', '${movie.creator}');`
  );
}

async function bookAddSP(
  book = {
    title,
    description,
    isbn13,
    pages,
    edition,
    release_date,
    creator,
  }
) {
  return await knex.raw(
    `call bibliotek.usp_book_add('${book.title}', '${book.description}', '${book.isbn13}', '${book.pages}' , '${book.edition}', '${book.release_date}','${book.creator}');`
  );
}

module.exports = {
  gameAddSP: gameAddSP,
  movieAddSP: movieAddSP,
  bookAddSP: bookAddSP,
};
