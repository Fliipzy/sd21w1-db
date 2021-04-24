const { Model } = require("objection");

class Book extends Model {
    static tableName = "book";
    
    static get relationMappings() {
        const Material = require("./Material.js");
        const Creator = require("./Creator.js");
        
        return {
            material: {
                relation: Model.HasOneRelation,
                modelClass: Material,
                join: {
                    from: "book.material_id",
                    to: "material.id"
                }
            },
            creators: {
                relation: Model.ManyToManyRelation,
                modelClass: Creator,
                join: {
                    from: "book.material_id",
                    through: {
                        from: "material__creator.material_id",
                        to: "material__creator.creator_id"
                    },
                    to: "creator.id"
                }
            }
        };
    };
};

module.exports = Book;