const router = require("express").Router();
const movieService = require("../../services/movieService.js");

router.get("/api/movies", async (req, res) => {
    const result = await movieService.getAllMovies();
    return res.json(result);
});

router.get("/api/movies/:id", async (req, res) => {
    const { id } = req.params;

    const result = await movieService.getMovieById(id);

    if (result) {
        return res.json(result);
    }
    return res.status(400).json({ response: "Could not find movie with given id" });
});

router.post("/api/movies", async (req, res) => {
    let { length, formatTypeId, creators, title, description, releaseDate,
        materialImageHeader } = req.body;
    
        let movie = {
            length: length,
            formatTypeId: formatTypeId,
            material: {
                title: title,
                description: description,
                releaseDate: new Date(releaseDate),
                materialTypeId: 2,
                materialImageHeader: materialImageHeader
            },
            creators: creators
        }
    
        const result = await (await movieService.createMovie(movie));
    
        if (result) {
            return res.status(200).json(result);
        } 
    
        return res.status(400).json({response: "bad request"});
});

router.put("/api/movies/:id", async (req, res) => {
    const { id } = req.params;
    const { formatTypeId } = req.body;

    const result = await movieService.updateMovieById(id, { formatTypeId });

    return res.json(result);
});

router.delete("/api/movies/:id", async (req, res) => {
    const { id } = req.params;

    const result = await movieService.deleteMovieById(id);
    return res.json(result);
});


module.exports = router;