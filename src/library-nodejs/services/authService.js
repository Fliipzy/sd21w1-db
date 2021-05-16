const bcrypt = require("bcrypt");
const Users = require("../models/User.js");
const jwt = require('jsonwebtoken');
const { jwtConfig } = require("../config/appConfig.js");
const RefreshToken = require("../models/mongoose/RefreshToken.js");

async function authenticate(username, password) {
	try {
		// fetch the user by username
		let user = await Users.query()
			.first()
			.where("username", username)
			.andWhere("active", 1);

		if (user) {
			// compare hashed passwords
			let bcryptResult = await bcrypt.compare(password, user.password);

			// if passwords matched
			if (bcryptResult) {
				// fetch user roles for authenticated user
				let roles = (await Users
					.relatedQuery("roles")
					.for(Users.query()
						.findById(user.id))).map(r => r.role);
				
				const payload = { id: user.id, username: user.username, roles: roles };

				// create an access & refresh token
				const accessToken = generateJwt(payload, jwtConfig.options);
				const refreshToken = generateJwt(payload);
				
				// create new refresh token & save it to mongodb
				const refreshTokenDocument = new RefreshToken({ token: refreshToken, userId: user.id });
				await refreshTokenDocument.save();

				return { accessToken, refreshToken};
			}
		}
	} catch (exception) {
		console.log(exception);
	}
	return null;
}

/**
 * Middleware function that verifies the validity of the jwt, provided by the client.
 * @returns Status code 401, if token is missing. Status code 403, if 
 * the verification of the token failed. 
 */
function verifyToken(req, res, next) {
	const cookies = req.cookies;
	const authHeader = req.headers["authorization"];
	let token = authHeader && authHeader.split(" ")[1];

	// if access_token cookie exists, assign token to that
	if (cookies.access_token) {
		token = cookies.access_token;
	}

	// else if jwt wasn't recieved with authorization header, return unauthorized
	else if (!token) {
		return res.sendStatus(401);
	}

	jwt.verify(token, jwtConfig.secret, async (error, decoded) => {

		if (error) {
			// if the token has expired
			if (error instanceof jwt.TokenExpiredError) {

				// check if client has a refresh token, then check if it exists in refreshTokens
				if (cookies.refresh_token) {

					const refreshToken = await RefreshToken.findOne({ token: cookies.refresh_token });

					// if refresh token exists, issue new access token to user
					if (refreshToken) {
						const { id, username, roles } = jwt.decode(token);
						res.cookie("access_token", generateJwt({ id, username, roles }, jwtConfig.options));
						return next();
					}
					return res.sendStatus(403);
				}
			}

			// user has tampered with the token, return forbidden
			return res.sendStatus(403);
		}
		return next();
	});
}

function generateJwt(payload, options = null) {
	return jwt.sign(payload, jwtConfig.secret, options);
}

module.exports = {
	authenticate: authenticate,
	verifyToken: verifyToken
}