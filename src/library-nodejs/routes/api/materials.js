const router = require("express").Router();

router.get("/api/materials", (req, res) => {

});

router.get("/api/materials/:id", (req, res) => {
    const {id} = req.params;
});

router.post("/api/materials", (req, res) => {
    
});

router.put("/api/materials", (req, res) => {
    
});

router.delete("/api/materials/:id", (req, res) => {
    const {id} = req.params;
});

module.exports = router;