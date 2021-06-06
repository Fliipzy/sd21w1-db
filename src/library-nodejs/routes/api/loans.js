const router = require("express").Router();
const loanService = require("../../services/loanService.js");

router.get("/api/loans", async (req, res) => {
    const loans = await loanService.getAllLoans();
    return res.json(loans);
});

router.post("/api/loans", async (req, res) => {
    const { userId, dueDate, materials } = req.body;
    const result = await loanService.createLoan(userId, dueDate, materials);

    if (!result) {
        return res.status(400).json({response: "bad request"});
    }
    return res.json(result);
});

module.exports = router;