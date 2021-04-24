const router = require("express").Router();
const userService = require("../../services/userService.js");

router.get("/api/users", async (req, res) => {
    // get all users
    const users = await userService.getAllUsers();
    
    // remove password property before responding
    users.forEach(user => {
        delete user.password;
    });

    return res.json(users);
});

router.get("/api/users/:id", (req, res) => {
    const {id} = req.params;
    const user = await userService.getUserById(id);

    // remove password property before responding
    delete user.password;

    if (user) {
        return res.status(200).json(user);
    }
    return res.status(404).json(user);
});

router.post("/api/users", (req, res) => {
    // get user object from body
    const {user} = req.body;
    const result = await userService.createUser(user);
    
    if (result) {
        return res.status(200).json({status: "success"});
    }

    return res.status(400).json({status: "failed"});
});

router.put("/api/users/:id", (req, res) => {
    const {id} = req.params;
});

module.exports = router;