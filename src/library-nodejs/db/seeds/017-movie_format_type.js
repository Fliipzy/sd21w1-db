exports.seed = function (knex) {
	return knex('movie_format_type').insert([
		{ id: 1, name: "DVD" },
		{ id: 2, name: "BlueRay" },
		{ id: 3, name: "VHS" }
	]);
};