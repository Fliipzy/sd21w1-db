const router = require("express").Router()
const authService = require("../../services/authService.js");

router.post("/api/login", async (req, res) => {

	// retrieve credentials from request body
	const { username, password } = req.body;

	if (!(username && password)) {
		return res.status(400).send({ response: false });
	}

	// use authService to authenticate credentials
	const result = await authService.authenticate(username, password);
	if (result) {
		// add user object to session
		req.session.user = { id: result.id, roles: result.roles };
		return res.status(200).send({ response: true });
	}

	// return 401 Unauthorized with bad credentials as reason
	return res.status(401).send({ response: false });
});

router.get("/api/logout", (req, res) => {
	try {
		// try to delete session user object
		delete req.session.user;
		return res.status(200).send({ response: true });
	} catch (error) {
		return res.status(400).send({ response: false });
	}
});

module.exports = router;