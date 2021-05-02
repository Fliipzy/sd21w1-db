const { Model } = require("objection");

class User extends Model{
    static tableName = "user";
    
    static get relationMappings() {
        const UserRole = require("./UserRole.js");
        const UserInformation = require("./UserInformation.js");
        const Loan = require("./Loan.js");

        return {
            information: {
                relation: Model.HasOneRelation,
                modelClass: UserInformation,
                join: {
                    from: "user.id",
                    to: "user_information.user_id"
                }
            },
            roles: {
                relation: Model.ManyToManyRelation,
                modelClass: UserRole,
                join: {
                    from: "user.id",
                    through: {
                        from: "user__user_role.user_id",
                        to: "user__user_role.role_id"
                    },
                    to: "user_role.id"
                }
            },
            loans: {
                relation: Model.HasManyRelation,
                modelClass: Loan,
                join: {
                    from: "user.id",
                    to: "loan.user_id"
                }
            }
        }
    }
};

module.exports = User;