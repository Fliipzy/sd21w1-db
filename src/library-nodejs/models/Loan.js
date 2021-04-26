const { Model } = require("objection");

class Loan extends Model {
	static tableName = "loan";

	static get relationMappings() {
		const User = require("./User.js");
		const Material = require("./Material.js");

		return {
			user: {
				relation: Model.HasOneRelation,
				modelClass: User,
				join: {
					from: "loan.user_id",
					to: "user.id"
				}
			},
			materials: {
				relation: Model.ManyToManyRelation,
				modelClass: Material,
				join: {
					from: "loan.id",
					through: {
						from: "material__loan.loan_id",
						to: "material__loan.material_id"
					},
					to: "material.id"
				}
			}
		}
	}
}

module.exports = Loan;