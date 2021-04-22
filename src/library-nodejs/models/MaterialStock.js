const { Model } = require('objection');

class Material_stock extends Model{
    static tableName = "material_stock";

};
const knexfile = require('../knexfile');
const knex = require('knex')({
    client : knexfile.development.client,
    connection : knexfile.development.connection
});
Material_stock.knex(knex);
module.exports = Material_stock;