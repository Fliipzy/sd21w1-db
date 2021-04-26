exports.seed = function (knex) {
	return knex('book').insert([
		{ id: 1, isbn13: "9781680502534", pages: 358, edition: "2nd Edition", material_id: 17 },
		{ id: 2, isbn13: "9781890774820", pages: 590, edition: "2nd Edition", material_id: 16 },
		{ id: 3, isbn13: "9781680507201", pages: 580, edition: "1st Edition", material_id: 18 },
		{ id: 4, isbn13: "9780132350884", pages: 434, edition: "1st Edition", material_id: 19 },
		{ id: 5, isbn13: "9780131103627", pages: 288, edition: "2nd Edition", material_id: 20 },
		{ id: 6, isbn13: "9780201616224", pages: 321, edition: "1st Edition", material_id: 21 },
		{ id: 7, isbn13: "9780201700732", pages: 1040, edition: "Special Edition", material_id: 22 },
		{ id: 8, isbn13: "9780446310789", pages: 324, edition: "First Edition", material_id: 31 }
	]);
};