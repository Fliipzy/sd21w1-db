const { Model } = require('objection');

class Genre extends Model{
    static tableName = "genre";

};
const knexfile = require('../knexfile');
const knex = require('knex')({
    client : knexfile.development.client,
    connection : knexfile.development.connection
});
Genre.knex(knex);
module.exports = Genre;