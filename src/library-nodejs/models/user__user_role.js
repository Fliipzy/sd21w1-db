const { Model } = require('objection');
const User = require('./user');
const User_Role = require('./user_role');

class user__user_role extends Model{
    static tableName = "user__user_role"

    static relationMappings = {
        user_role: {
            relation: Model.BelongsToOneRelation,
            modelClass : User_Role,
            join: {
                from: "user__user_role.user_role_id",
                to: "user_role.id"
            }
        },
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass : User,
            join: {
                from: "user__user_role.user_id",
                to: "user.id"
            }
        }
    }
};

const knexfile = require('../knexfile');
const { BelongsToOneRelation } = require('./user_role');
const knex = require('knex')({
    client : knexfile.development.client,
    connection : knexfile.development.connection
});
user__user_role.knex(knex);
module.exports = user__user_role;