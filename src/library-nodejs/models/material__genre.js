const { Model } = require('objection');
const Material = require('./material');
const Genre = require('./genre');

class material__genre extends Model{
    static tableName = "material__genre"

    static relationMappings = {
        material: {
            relation: Model.BelongsToOneRelation,
            modelClass : Material,
            join: {
                from: "material__genre.material_id",
                to: "material.id"
            }
        },
        genre: {
            relation: Model.BelongsToOneRelation,
            modelClass : Genre,
            join: {
                from: "material__genre.genre_id",
                to: "genre.id"
            }
        }
    }
};

const knexfile = require('../knexfile');
const { BelongsToOneRelation } = require('./genre');
const knex = require('knex')({
    client : knexfile.development.client,
    connection : knexfile.development.connection
});
material__genre.knex(knex);
module.exports = material__genre;