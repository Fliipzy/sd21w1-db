const { Model } = require('objection');

class Material_type extends Model{
    static tableName = "material_type";

};
const knexfile = require('../knexfile');
const knex = require('knex')({
    client : knexfile.development.client,
    connection : knexfile.development.connection
});
Material_type.knex(knex);
module.exports = Material_type;