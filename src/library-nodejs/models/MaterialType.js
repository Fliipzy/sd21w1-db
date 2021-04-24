const { Model } = require("objection");

class MaterialType extends Model{
    static tableName = "material_type";
};

module.exports = MaterialType;