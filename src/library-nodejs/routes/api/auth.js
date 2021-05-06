const router = require("express").Router()
const authService = require("../../services/authService.js");

router.post("/api/login", async (req, res) => {

	// retrieve credentials from request body
	const { username, password } = req.body;

	if (!(username && password)) {
		return res.status(400).send({ response: false });
	}

	// use authService to get a signed tokens
	const result = await authService.authenticate(username, password);

	if (result) {
		return res.json({ accessToken: result.accessToken, refreshToken: result.refreshToken });
	}

	// return 401 Unauthorized with bad credentials as reason
	return res.status(401).send({ response: false });
});

router.get("/api/logout", (req, res) => {
	
});

module.exports = router;