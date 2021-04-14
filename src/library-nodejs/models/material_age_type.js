const { Model } = require('objection');

class Material_age_type extends Model{
    static tableName = "material_age_type";

};
const knexfile = require('../knexfile');
const knex = require('knex')({
    client : knexfile.development.client,
    connection : knexfile.development.connection
});
Material_age_type.knex(knex);
module.exports = Material_age_type;