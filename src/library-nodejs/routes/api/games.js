const router = require("express").Router();
const gameService = require("../../services/gameService.js");

router.get("/api/games", async (req, res) => {
    const result = await gameService.getAllGames();
    return res.json(result);
});

router.get("/api/games/:id", async (req, res) => {
    const { id } = req.params;

    const result = await gameService.getGameById(id);
    return res.json(result);
});

router.post("/api/games", async (req, res) => {
    let { gameConsoleTypeId, creators, title, description, releaseDate,
        materialImageHeader } = req.body;
    
    let game = {
        gameConsoleTypeId: gameConsoleTypeId,
        material: {
            title: title,
            description: description,
            releaseDate: releaseDate,
            materialTypeId: 3,
            materialImageHeader: materialImageHeader
        },
        creators: creators
    }

    const result = await gameService.createGame(game);
    return res.json(result);
});

router.put("/api/games/:id", async (req, res) => {
    const { id } = req.params;
    const { gameConsoleTypeId } = req.body;

    const result = await gameService.updateGameById(id, { gameConsoleTypeId });
    return res.json(result);
});

router.delete("/api/games/:id", async (req, res) => {
    const { id } = req.params;

    const result = await gameService.deleteGameById(id);
    return res.json(result);
});

module.exports = router;