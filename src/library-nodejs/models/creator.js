const { Model } = require('objection');

class Creator extends Model{
    static tableName = "creator";

    static get relationMappings() {
        const Material = require("./Material.js");

        return {
            materials: {
                relation: Model.ManyToManyRelation,
                modelClass: Material,
                join: {
                    from: "creator.id",
                    through: {
                        from: "material__creator.creator_id",
                        to: "material__material_id"
                    },
                    to: "material.id"
                }
            }
        }
    }
};

module.exports = Creator;