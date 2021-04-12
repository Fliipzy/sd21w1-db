exports.seed = function (knex) {
  return knex('user_role').insert([
    { id: 1, role: 'admin' },
    { id: 2, role: 'user' },
    { id: 3, role: 'moderator' }
  ]);
};
