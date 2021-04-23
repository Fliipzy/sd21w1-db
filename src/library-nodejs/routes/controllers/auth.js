const router = require("express").Router();

router.get("/login", (req, res) => {
    res.render("pages/login");
});

router.get("/signup", (req, res) => {
    res.render("pages/signup");
});

router.get("/forgot", (req, res) => {
    res.render("pages/forgot");
});

module.exports = router;