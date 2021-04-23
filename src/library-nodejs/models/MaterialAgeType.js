const { Model } = require('objection');

class MaterialAgeType extends Model{
    static tableName = "material_age_type";

    static get relationMappings() {
        const Material = require("./Material.js");

        return {
            materials: {
                relation: Model.HasManyRelation,
                modelClass: Material,
                join: {
                    from: "material_age_type.id",
                    to: "material.material_age_type_id"
                }
            }
        }
    }
};

module.exports = MaterialAgeType;