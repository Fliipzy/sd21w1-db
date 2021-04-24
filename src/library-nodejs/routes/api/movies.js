const router = require("express").Router();
const movieService = require("../../services/movieService.js");

router.get("/api/movies", (req, res) => {
    
});

router.get("/api/movies/:id", (req, res) => {
    const {id} = req.params;
});

router.post("/api/movies", (req, res) => {
    
});

router.put("/api/movies/:id", (req, res) => {
    const {id} = req.params;
});

module.exports = router;