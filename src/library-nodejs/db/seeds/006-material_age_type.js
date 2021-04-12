exports.seed = function (knex) {
  return knex('material_age_type').insert([
    { id: 1, name: 'MPAA-G' },
    { id: 2, name: 'MPAA-PG' },
    { id: 3, name: 'MPAA-PG-13' },
    { id: 4, name: 'MPAA-R' },
    { id: 5, name: 'MPAA-NC-17' },
    { id: 6, name: 'PEGI-3' },
    { id: 7, name: 'PEGI-7' },
    { id: 8, name: 'PEGI-12' },
    { id: 9, name: 'PEGI-16' },
    { id: 10, name: 'PEGI-18' },
  ])
};
