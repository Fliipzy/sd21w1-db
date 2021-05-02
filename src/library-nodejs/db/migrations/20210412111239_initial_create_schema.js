const databaseConfig = require('../../config/databaseConfig');

exports.up = function (knex) {
	return knex.schema
		.createTable('creator', table => {
			table.increments('id').unsigned();
			table.string('name').unique().notNullable();
			table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
			table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
		})
		.createTable('genre', table => {
			table.increments('id').unsigned();
			table.string('name').notNullable();
		})
		.createTable('material_type', table => {
			table.increments('id').unsigned();
			table.string('name').notNullable();
			table.integer('loan_time_days').unsigned().notNullable();
			table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
			table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
		})
		.createTable('material_age_type', table => {
			table.increments('id').unsigned();
			table.string('name').notNullable();
			table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
			table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
		})
		.createTable('material', table => {
			table.increments('id').unsigned();
			table.string('title').notNullable();
			table.text('description').notNullable();
			table.date('release_date').notNullable();
			table.string('material_image_header');
			table.integer('material_type_id').unsigned().notNullable();
			table.integer('material_age_type_id').unsigned();
			table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
			table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

			table.foreign('material_type_id').references('material_type.id');
			table.foreign('material_age_type_id').references('material_age_type.id');
		})
		.createTable('material_stock', table => {
			table.increments('id').unsigned();
			table.integer('amount_all').unsigned().notNullable();
			table.integer('amount_available').unsigned().notNullable();
			table.integer('material_id').unsigned().notNullable();
			table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

			table.foreign('material_id').references('material.id');
		})
		.createTable('material__genre', table => {
			table.integer('material_id').unsigned().notNullable();
			table.integer('genre_id').unsigned().notNullable();

			table.foreign('material_id').references('material.id');
			table.foreign('genre_id').references('genre.id');
			table.unique(['material_id', 'genre_id']);
		})
		.createTable('material__creator', table => {
			table.integer('material_id').unsigned().notNullable();
			table.integer('creator_id').unsigned().notNullable();

			table.foreign('material_id').references('material.id');
			table.foreign('creator_id').references('creator.id');
			table.primary(['material_id', 'creator_id']);
		})
		.createTable('book', table => {
			table.increments('id').unsigned();
			table.string('isbn13', 13).notNullable();
			table.integer('pages').unsigned().notNullable();
			table.string('edition').notNullable();
			table.integer('material_id').unsigned().notNullable();
			table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
			table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

			table.foreign('material_id').references('material.id');
		})
		.createTable('movie_format_type', table => {
			table.increments('id').unsigned();
			table.string('name');
		})
		.createTable('movie', table => {
			table.increments('id').unsigned();
			table.string('length').notNullable();
			table.integer('format_type_id').unsigned().notNullable();
			table.integer('material_id').unsigned().notNullable();
			table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
			table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

			table.foreign('format_type_id').references('movie_format_type.id');
			table.foreign('material_id').references('material.id');
		})
		.createTable('game_console_type', table => {
			table.increments('id').unsigned();
			table.string('console').notNullable();
		})
		.createTable('game', table => {
			table.increments('id').unsigned();
			table.integer('material_id').unsigned().notNullable();
			table.integer('game_console_type_id').unsigned().notNullable();
			table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
			table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

			table.foreign('material_id').references('material.id');
			table.foreign('game_console_type_id').references('game_console_type.id');
		})
		.createTable('user_role', table => {
			table.increments('id').unsigned();
			table.string('role').notNullable();
			table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
			table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
		})
		.createTable('user', table => {
			table.increments('id').unsigned();
			table.string('username').notNullable();
			table.string('password').notNullable();
			table.boolean('active').defaultTo(1).notNullable();
			table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
			table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
		})
		.createTable('user__user_role', table => {
			table.integer('user_id').unsigned().notNullable();
			table.integer('role_id').unsigned().notNullable();

			table.foreign('user_id').references('user.id');
			table.foreign('role_id').references('user_role.id');
			table.primary(['user_id', 'role_id']);
		})
		.createTable('user_information', table => {
			table.increments('id').unsigned();
			table.date('birth_date').notNullable();
			table.string('email').notNullable();
			table.string('phone_number').notNullable();
			table.integer('user_id').unsigned().notNullable();
			table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
			table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

			table.foreign('user_id').references('user.id');
		})
		.createTable('user_retrieval', table => {
			table.increments('id').unsigned();
			table.uuid('uuid').notNullable();
			table.boolean('used').defaultTo(1).notNullable();
			table.integer('user_id').unsigned().notNullable();
			table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
		})
		.createTable('loan', table => {
			table.increments('id').unsigned();
			table.integer('user_id').unsigned().notNullable();
			table.date('due_date').notNullable();
			table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
			table.foreign('user_id').references('user.id');
		})
		.createTable('material__loan', table => {
			table.integer('material_id').unsigned();
			table.integer('loan_id').unsigned();

			table.foreign('material_id').references('material.id');
			table.foreign('loan_id').references('loan.id');
			table.primary(['material_id', 'loan_id']);
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('material__loan')
		.dropTableIfExists('loan')
		.dropTableIfExists('user__user_role')
		.dropTableIfExists('material__creator')
		.dropTableIfExists('material__genre')
		.dropTableIfExists('user_retrieval')
		.dropTableIfExists('user_information')
		.dropTableIfExists('user')
		.dropTableIfExists('user_role')
		.dropTableIfExists('game')
		.dropTableIfExists('game_console_type')
		.dropTableIfExists('movie')
		.dropTableIfExists('movie_format_type')
		.dropTableIfExists('book')
		.dropTableIfExists('material_stock')
		.dropTableIfExists('material')
		.dropTableIfExists('material_age_type')
		.dropTableIfExists('material_type')
		.dropTableIfExists('genre')
		.dropTableIfExists('creator')
};
