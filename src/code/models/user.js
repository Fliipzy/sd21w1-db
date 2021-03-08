const { Model } = require('objection');

class User extends Model{
    static tableName = "user";

};
const knexfile = require('../knexfile');
const knex = require('knex')({
    client : knexfile.development.client,
    connection : knexfile.development.connection
});
User.knex(knex);
module.exports = User;