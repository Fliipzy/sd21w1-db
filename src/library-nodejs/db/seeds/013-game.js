exports.seed = function (knex) {
  return knex('game').insert([
    { id: 1, material_id: 1, game_console_type_id: 1 },
    { id: 2, material_id: 2, game_console_type_id: 1 },
    { id: 3, material_id: 3, game_console_type_id: 1 },
    { id: 4, material_id: 4, game_console_type_id: 1 },
    { id: 5, material_id: 5, game_console_type_id: 1 },
    { id: 6, material_id: 6, game_console_type_id: 1 },
    { id: 7, material_id: 7, game_console_type_id: 1 },
    { id: 8, material_id: 8, game_console_type_id: 1 },
    { id: 9, material_id: 9, game_console_type_id: 1 },
    { id: 10, material_id: 10, game_console_type_id: 1 },
    { id: 11, material_id: 11, game_console_type_id: 1 },
    { id: 12, material_id: 12, game_console_type_id: 1 },
    { id: 13, material_id: 13, game_console_type_id: 1 },
    { id: 14, material_id: 14, game_console_type_id: 1 },
    { id: 15, material_id: 15, game_console_type_id: 1 },
    { id: 16, material_id: 16, game_console_type_id: 1 }
  ]);
};
