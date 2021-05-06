/**
 * Sends an async HTTP POST request to /api/login
 * @param {*} username the user's username 
 * @param {*} password the user's password
 * @returns window.locate if the authentication
 *  was succesful. The response json object if 
 *  it failed.
 */
async function authenticate(username, password) {
	const result = await fetch("/api/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({username, password})
	});

	const data = await result.json();

	if (data && result.status == 200) {
		return data;
	} else {
		return null;
	}
}