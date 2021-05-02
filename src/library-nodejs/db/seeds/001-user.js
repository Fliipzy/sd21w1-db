exports.seed = function (knex) {
  return knex('user').insert([
    { id: 1, username: 'frederik', password: '$2b$12$yXXWZD3cqaOlPA3z.fHmkep0dNSwCGqrq9NDhqvCozxwccf44lUiu' },
    { id: 2, username: 'wajid', password: '$2y$12$H.Rtb.iZGRWSTTlvn6mCi.cITtWZeo1wd7RYhB65dCSa.VYRvPMuK' },
    { id: 3, username: 'jens', password: '$2y$12$QmbDQCrCckMD1UayPKvy4useWSrcOwbCv6LRhxrWl3tKvVBLCq/5K' }
  ]);
};
