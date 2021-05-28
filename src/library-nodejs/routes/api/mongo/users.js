const router = require("express").Router();
const userService = require("../../../services/mongo/userService.js");

router.get("/api/mongo/users", async (req, res) => {
	const users = await userService.getAllUsers();
	return res.json(users);
});

router.get("/api/mongo/users/:id", async (req, res) => {
	const id = req.params.id;
	const user = await userService.findUserById(id);

	if (user) {
		return res.json(user);
	}
	return res.status(204);
});

router.post("/api/mongo/users", async (req, res) => {
	const userData = req.body;
	const user = await userService.createUser(userData);

	if (user) {
		return res.json(user);
	}
	return res.status(400);
});

router.put("/api/mongo/users/:id", async (req, res) => {
	const id = req.params.id;
	const userData = req.body;
	const user = await userService.updateUser(id, userData);

	if (user) {
		return res.json(user);
	}
	return res.status(400);
});

router.delete("/api/mongo/users/:id", async (req, res) => {
	const id = req.params.id;
	const result = await userService.deleteUser(id);

	if (result.deletedCount == 0) {
		return res.status(400);
	}
	return res.status(200);
});

module.exports = router;