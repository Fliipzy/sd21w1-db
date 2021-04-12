
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user__user_role').del()
    .then(function () {
      // Inserts seed entries
      return knex('user__user_role').insert([
        {user_id: 1, user_role_id: 1},
        {user_id: 2, user_role_id: 1},
        {user_id: 3, user_role_id: 2}
      ]);
    });
};
