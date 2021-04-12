const credentials = require("./config/databaseConfig.js")
const { knexSnakeCaseMappers } = require('objection');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: credentials.database,
      user:     credentials.user,
      password: credentials.password,
      host: credentials.host
    },
    seeds: {
      directory: './db/seeds/'
    },
    migrations: {
      directory: './db/migrations/'
    },
    ...knexSnakeCaseMappers()
  }

};