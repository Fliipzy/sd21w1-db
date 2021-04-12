
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('material_genre').del()
    .then(function () {
      // Inserts seed entries
      return knex('material_genre').insert([
        {material_id: 1, genre_id: 1},
      ]);
    });
};
