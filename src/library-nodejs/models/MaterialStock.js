const { Model } = require("objection");

class MaterialStock extends Model{
    static tableName = "material_stock";
};

module.exports = MaterialStock;