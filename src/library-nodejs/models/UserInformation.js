const { Model } = require('objection');

class UserInformation extends Model{
    static tableName = "user_information";

    static get relationMappings() {
        const User = require("./User.js");

        return {
            user: {
                relation: Model.HasOneRelation,
                modelClass: User,
                join: {
                    from: "user_information.user_id",
                    to: "user.id"
                }
            }
        }
    }
};

module.exports = UserInformation;