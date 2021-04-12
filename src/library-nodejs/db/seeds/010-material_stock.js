exports.seed = function (knex) {
  return knex('material_stock').insert([
    { id: 1, amount_all: 10, amount_available: 10, material_id: 1 },
    { id: 2, amount_all: 10, amount_available: 10, material_id: 2 },
    { id: 3, amount_all: 10, amount_available: 10, material_id: 3 },
    { id: 4, amount_all: 10, amount_available: 10, material_id: 4 },
    { id: 5, amount_all: 10, amount_available: 10, material_id: 5 },
    { id: 6, amount_all: 10, amount_available: 10, material_id: 6 },
    { id: 7, amount_all: 10, amount_available: 10, material_id: 7 },
    { id: 8, amount_all: 10, amount_available: 10, material_id: 8 },
    { id: 9, amount_all: 10, amount_available: 10, material_id: 9 },
    { id: 10, amount_all: 10, amount_available: 10, material_id: 10 },
    { id: 11, amount_all: 10, amount_available: 10, material_id: 11 },
    { id: 12, amount_all: 10, amount_available: 10, material_id: 12 },
    { id: 13, amount_all: 10, amount_available: 10, material_id: 13 },
    { id: 14, amount_all: 10, amount_available: 10, material_id: 14 },
    { id: 15, amount_all: 10, amount_available: 10, material_id: 15 },
    { id: 16, amount_all: 10, amount_available: 10, material_id: 16 },
    { id: 17, amount_all: 10, amount_available: 10, material_id: 17 },
    { id: 18, amount_all: 10, amount_available: 10, material_id: 18 },
  ]);
};
