
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_role').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_role').insert([
        {id: 1, role: 'admin'},
        {id: 2, role: 'user'},
        {id: 3, role: 'moderator'}
      ]);
    });
};
