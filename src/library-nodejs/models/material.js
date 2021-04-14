const { Model } = require('objection');

class Material extends Model{
    static tableName = "material";

};
const knexfile = require('../knexfile');
const knex = require('knex')({
    client : knexfile.development.client,
    connection : knexfile.development.connection
});
Material.knex(knex);
module.exports = Material;