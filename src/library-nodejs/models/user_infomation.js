const { Model } = require('objection');

class User_infomation extends Model{
    static tableName = "user_information";

};
const knexfile = require('../knexfile');
const knex = require('knex')({
    client : knexfile.development.client,
    connection : knexfile.development.connection
});
User_infomation.knex(knex);
module.exports = User_infomation;