const { Model } = require("objection");
const Material = require("./Material.js");
const MovieFormatType = require("./MovieFormatType.js");
const Creator = require("./Creator.js");

class Movie extends Model {
    static tableName = "movie";
    
    static get relationMappings() {
        return {
            material: {
                relation: Model.BelongsToOneRelation,
                modelClass: Material,
                join: {
                    from: "movie.material_id",
                    to: "material.id"
                }
            },
            formatType: {
                relation: Model.HasOneRelation,
                modelClass: MovieFormatType,
                join: {
                    from: "movie.format_type_id",
                    to: "movie_format_type.id"
                }
            },
            creators: {
                relation: Model.ManyToManyRelation,
                modelClass: Creator,
                join: {
                    from: "movie.material_id",
                    through: {
                        from: "material__creator.material_id",
                        to: "material__creator.creator_id"
                    },
                    to: "creator.id"
                }
            }
        }
    }
}

module.exports = Movie;