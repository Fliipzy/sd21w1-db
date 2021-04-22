const { Model } = require('objection');

class Genre extends Model{
    static tableName = "genre";

    static get relationMappings() {
        const Material = require("./Material.js");

        return {
            materials: {
                relation: Model.ManyToManyRelation,
                modelClass: Material,
                join: {
                    from: "genre.id",
                    through: {
                        from: "material__genre.genre_id",
                        to: "material__genre.material_id"
                    },
                    to: "material.id"
                }
            }
        }
    }
};

module.exports = Genre;