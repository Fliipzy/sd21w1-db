exports.seed = function (knex) {
  return knex('user').insert([
    { id: 1, username: 'frederik', password: '$2b$12$yXXWZD3cqaOlPA3z.fHmkep0dNSwCGqrq9NDhqvCozxwccf44lUiu' },
    { id: 2, username: 'wajid', password: '$2b$12$wJUabhVAYCJAOMW9jD5ozOTRoLjnauPsPQwYOvYTAtwdx2HbunwVu' },
    { id: 3, username: 'jens', password: '$2y$12$QmbDQCrCckMD1UayPKvy4useWSrcOwbCv6LRhxrWl3tKvVBLCq/5K' },
    { id: 4, username: 'user', password: '$2b$12$wJUabhVAYCJAOMW9jD5ozOTRoLjnauPsPQwYOvYTAtwdx2HbunwVu' }
  ]);
};
