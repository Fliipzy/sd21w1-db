
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
        {id: 1, material_id: , game_console_type_id: },
        {id: 1, material_id: , game_console_type_id: },
        {id: 1, material_id: , game_console_type_id: },
        {id: 1, material_id: , game_console_type_id: },
        {id: 1, material_id: , game_console_type_id: },
        {id: 1, material_id: , game_console_type_id: },
        {id: 1, material_id: , game_console_type_id: },
        {id: 1, material_id: , game_console_type_id: },
        {id: 1, material_id: , game_console_type_id: },
        {id: 1, material_id: , game_console_type_id: },
        {id: 1, material_id: , game_console_type_id: },
        {id: 1, material_id: , game_console_type_id: },
        {id: 1, material_id: , game_console_type_id: },
        {id: 1, material_id: , game_console_type_id: },
        {id: 1, material_id: , game_console_type_id: },
        {id: 1, material_id: , game_console_type_id: }
      ]);
    });
};
