const { Model } = require('objection');

class Game_console_type extends Model{
    static tableName = "game_console_type";

};
const knexfile = require('../knexfile');
const knex = require('knex')({
    client : knexfile.development.client,
    connection : knexfile.development.connection
});
Game_console_type.knex(knex);
module.exports = Game_console_type;