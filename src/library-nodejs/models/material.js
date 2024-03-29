const { Model } = require("objection");

class Material extends Model{
    static tableName = "material";

    static get relationMappings() {
        const Genre = require("./Genre.js");
        const Creator = require("./Creator.js");
        const MaterialStock = require("./MaterialStock.js");
        const MaterialAgeType = require("./MaterialAgeType.js");
        const Loan = require("./Loan.js");

        return {
            genres: {
                relation: Model.ManyToManyRelation,
                modelClass: Genre,
                join: {
                    from: "material.id",
                    through: {
                        from: "material__genre.material_id",
                        to: "material__genre.genre_id"
                    },
                    to: "genre.id"
                }
            },
            creators: {
                relation: Model.ManyToManyRelation,
                modelClass: Creator,
                join: {
                    from: "material.id",
                    through: {
                        from: "material__creator.material_id",
                        to: "material__creator.creator_id"
                    },
                    to: "creator.id"
                }
            },
            stock: {
                relation: Model.HasOneRelation,
                modelClass: MaterialStock,
                join: {
                    from: "material.id",
                    to: "material_stock.material_id"
                }
            },
            ageType: {
                relation: Model.HasOneRelation,
                modelClass: MaterialAgeType,
                join: {
                    from: "material.material_age_type_id",
                    to: "material_age_type.id"
                }
            },
            loans: {
                relation: Model.ManyToManyRelation,
                modelClass: Creator,
                join: {
                    from: "material.id",
                    through: {
                        from: "material__loan.material_id",
                        to: "material__loan.loan_id"
                    },
                    to: "loan.id"
                }
            }
        }
    }
};

module.exports = Material;