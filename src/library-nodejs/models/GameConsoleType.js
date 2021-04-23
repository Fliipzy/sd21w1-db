const { Model } = require('objection');

class GameConsoleType extends Model{
    static tableName = "game_console_type";

    static get relationMappings() {
        const Game = require("./Game.js");

        return {
            games: {
                relation: Model.HasManyRelation,
                modelClass: Game,
                join: {
                    from: "game_console_type.id",
                    to: "game.game_console_type_id"
                }
            }
        }
    }
};

module.exports = GameConsoleType;