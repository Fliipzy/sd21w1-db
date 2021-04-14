const { Model } = require('objection');

class Creator extends Model{
    static tableName = "creator";

};
const knexfile = require('../knexfile');
const knex = require('knex')({
    client : knexfile.development.client,
    connection : knexfile.development.connection
});
Creator.knex(knex);
module.exports = Creator;