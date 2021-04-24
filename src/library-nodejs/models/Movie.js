const { Model } = require("objection");

class Movie extends Model {
    static tableName = "movie";
    
    static get relationMappings() {
        const Material = require("./Material.js");
        const MovieFormatType = require("./MovieFormatType.js");

        return {
            material: {
                relation: Model.HasOneRelation,
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
            }
        }
    }
}

module.exports = Movie;