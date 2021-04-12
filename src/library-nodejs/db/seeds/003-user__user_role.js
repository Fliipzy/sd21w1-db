exports.seed = function (knex) {
  return knex('user__user_role').insert([
    { user_id: 1, role_id: 1 },
    { user_id: 2, role_id: 1 },
    { user_id: 3, role_id: 2 }
  ]);
};
