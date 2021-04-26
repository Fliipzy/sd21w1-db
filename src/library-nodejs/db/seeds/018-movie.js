exports.seed = function (knex) {
	return knex('movie').insert([
		{ id: 1, length: "01:44:00", format_type_id: 1, material_id: 3 },
		{ id: 2, length: "01:57:00", format_type_id: 1, material_id: 1 },
		{ id: 3, length: "02:38:00", format_type_id: 2, material_id: 2 },
		{ id: 4, length: "02:22:00", format_type_id: 1, material_id: 4 },
		{ id: 5, length: "02:34:00", format_type_id: 1, material_id: 9 },
		{ id: 6, length: "02:22:00", format_type_id: 1, material_id: 10 },
		{ id: 7, length: "02:26:00", format_type_id: 1, material_id: 11 },
		{ id: 8, length: "02:16:00", format_type_id: 1, material_id: 12 },
		{ id: 9, length: "02:05:00", format_type_id: 1, material_id: 13 },
		{ id: 10, length: "01:59:00", format_type_id: 1, material_id: 14 },
		{ id: 11, length: "01:53:00", format_type_id: 1, material_id: 15 },
		{ id: 12, length: "02:12:00", format_type_id: 1, material_id: 25 },
		{ id: 13, length: "02:02:00", format_type_id: 1, material_id: 26 },
		{ id: 14, length: "01:42:00", format_type_id: 2, material_id: 27 },
		{ id: 15, length: "02:02:00", format_type_id: 2, material_id: 28 }
	]);
};