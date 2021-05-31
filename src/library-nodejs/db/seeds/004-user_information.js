exports.seed = function (knex) {
  return knex('user_information').insert([
    { id: 1, birth_date: new Date(1993, 1, 11), email: 'frederiklundbeck@live.dk', phone_number: '28269999', user_id: 1 },
    { id: 2, birth_date: new Date(1999, 8, 9), email: 'wajid2665@gmail.com', phone_number: '23906288', user_id: 2 },
    { id: 3, birth_date: new Date(1986, 10, 17), email: 'user001@gmail.com', phone_number: '28314812', user_id: 3 },
    { id: 4, birth_date: new Date(1980, 3, 8), email: 'teacher@kea.dk', phone_number: '84271834', user_id: 4 }
  ]);
};
