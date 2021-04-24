const router = require("express").Router();

router.get("/api/games", (req, res) => {

});

router.get("/api/games/:id", (req, res) => {
    const {id} = req.params;
});

router.post("/api/games", (req, res) => {
    
});

router.put("/api/games/:id", (req, res) => {
    const {id} = req.params;
});

module.exports = router;