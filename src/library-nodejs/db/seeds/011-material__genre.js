exports.seed = function (knex) {
  return knex('material__genre').insert([
    { material_id: 1, genre_id: 1 },
  ]);
};
