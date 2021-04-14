const { Model } = require('objection');

class Game extends Model{
    static tableName = "game";

};
const knexfile = require('../knexfile');
const knex = require('knex')({
    client : knexfile.development.client,
    connection : knexfile.development.connection
});
Game.knex(knex);
module.exports = Game;