
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, username: 'frederik', password: '$2y$12$ydtBFIKECmY1O4OCzyTiwu70MZuoUfo72zZN0dOTZ2GVlwzMHqnZK'},
        {id: 2, username: 'wajid', password: '$2y$12$H.Rtb.iZGRWSTTlvn6mCi.cITtWZeo1wd7RYhB65dCSa.VYRvPMuK'},
        {id: 3, username: 'jens', 'password': '$2y$12$jo5N0h9Lw7AARLjGvqO1qOu33erY6jhsggnKsAU94sWI61IVgr2jC'}
      ]);
    });
};
