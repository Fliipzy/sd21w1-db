const router = require("express").Router();
const storedProcedureService = require("../../services/storedProcedureService.js");

router.post("/api/sp/game", async (req, res) => {
  let {
    title,
    description,
    release_date,
    age_restriction_type,
    game_console_type,
    creator,
  } = req.body;

  let game = {
    title: title,
    description: description,
    release_date: release_date,
    age_restriction_type: age_restriction_type,
    game_console_type: game_console_type,
    creator: creator,
  };

  const result = await storedProcedureService.gameAddSP(game);
  return res.json("Game: Added");
});

router.post("/api/sp/movie", async (req, res) => {
  let {
    title,
    description,
    release_date,
    age_restriction_type,
    length,
    format_type,
    creator,
  } = req.body;

  let movie = {
    title: title,
    description: description,
    release_date: release_date,
    age_restriction_type: age_restriction_type,
    length: length,
    format_type: format_type,
    creator: creator,
  };

  const result = await storedProcedureService.movieAddSP(movie);
  return res.json("Movie: Added");
});

router.post("/api/sp/book", async (req, res) => {
  let {
    title,
    description,
    isbn13,
    pages,
    edition,
    release_date,
    creator,
  } = req.body;

  let book = {
    title: title,
    description: description,
    isbn13: isbn13,
    pages: pages,
    edition: edition,
    release_date: release_date,
    creator: creator,
  };

  const result = await storedProcedureService.bookAddSP(book);
  return res.json("Book: Added");
});

module.exports = router;
