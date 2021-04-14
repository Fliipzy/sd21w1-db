const { Model } = require('objection');

class User_role extends Model{
    static tableName = "user_role";

};
const knexfile = require('../knexfile');
const knex = require('knex')({
    client : knexfile.development.client,
    connection : knexfile.development.connection
});
User_role.knex(knex);
module.exports = User_role;