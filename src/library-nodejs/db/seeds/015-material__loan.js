exports.seed = function (knex) {
    return knex('material__loan').insert([
        { loan_id: 1, material_id: 5 },
        { loan_id: 1, material_id: 16 }
    ]);
};