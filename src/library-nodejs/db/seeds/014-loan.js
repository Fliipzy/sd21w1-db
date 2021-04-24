exports.seed = function (knex) {
    return knex('loan').insert([
        { id: 1, user_id: 1, due_date: new Date(2021, 6, 24) }
    ]);
};