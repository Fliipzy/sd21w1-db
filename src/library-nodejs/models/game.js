const { Model } = require("objection");

class Game extends Model{
    static tableName = "game";

    static get relationMappings() {
        const Material = require("./Material.js");
        const GameConsoleType = require("./GameConsoleType.js");

        return {
            material: {
                relation: Model.HasOneRelation,
                modelClass: Material,
                join: {
                    from: "game.material_id",
                    to: "material.id"
                }
            },
            console: {
                relation: Model.HasOneRelation,
                modelClass: GameConsoleType,
                join: {
                    from: "game.game_console_type_id",
                    to: "game_console_type.id"
                }
            }
        }
    }
};

module.exports = Game;