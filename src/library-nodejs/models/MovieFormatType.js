const { Model } = require("objection");

class MovieFormatType extends Model {
    static tableName = "movie_format_type";
    
    static get relationMappings() {
        const Movie = require("./Movie.js");

        return {
            movies: {
                relation: Model.HasManyRelation,
                modelClass: Movie,
                join: {
                    from: "movie_format_type.id",
                    to: "movie.format_type_id"
                }
            }
        }
    }
}

module.exports = MovieFormatType;