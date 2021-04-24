const { Model } = require("objection");

class UserRole extends Model{
    static tableName = "user_role";

    static get relationMappings() {
        const User = require("./User.js");

        return {
            users: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: "user_role.id",
                    through: {
                        from: "user__user_role.role_id",
                        to: "user__user_role.user_id"
                    },
                    to: "user.id"
                }
            }
        }
    }
};

module.exports = UserRole;