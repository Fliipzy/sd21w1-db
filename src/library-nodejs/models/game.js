const { Model } = require("objection");
const Material = require("./Material.js");
const GameConsoleType = require("./GameConsoleType.js");
const Creator = require("./Creator.js");

class Game extends Model{
    static tableName = "game";

    static get relationMappings() {
        return {
            material: {
                relation: Model.BelongsToOneRelation,
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
            },
            creators: {
                relation: Model.ManyToManyRelation,
                modelClass: Creator,
                join: {
                    from: "game.material_id",
                    through: {
                        from: "material__creator.material_id",
                        to: "material__creator.creator_id"
                    },
                    to: "creator.id"
                }
            }
        }
    }
};

module.exports = Game;