exports.seed = async function (knex) {

	//delete all entries
	let tables = ['material__loan', 'loan', 'user__user_role', 'user_role', 'user_information', 'user',
		'creator', 'book', 'movie', 'game', 'material__genre', 'material_stock', 'material',
		'material_age_type', 'game_console_type', 'genre', 'material_type'];
	
	for (let i = 0; i < tables.length; i++) {
		await knex(tables[i]).del();
	}
};