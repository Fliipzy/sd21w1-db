
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('material_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('material_type').insert([
        {id: 1, name: 'book', loan_time: 1},
        {id: 2, name: 'movie', loan_time: 1},
        {id: 3, name: 'game', loan_time: 1},
      ]);
    });
};
