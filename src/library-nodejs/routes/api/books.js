const router = require("express").Router();

router.get("/api/books", (req, res) => {

});

router.get("/api/books/:id", (req, res) => {
    const {id} = req.params;
});

router.post("/api/books", (req, res) => {
    
});

router.put("/api/books/:id", (req, res) => {
    const {id} = req.params;
});

module.exports = router;