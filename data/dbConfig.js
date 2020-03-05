const knex = require('knex');

//developemnt
//const env = process.emitWarning.DB_ENV || 'development'

// install add ons in heroku and use postgres
// reveal configvars
// create DB_ENV  value: production
// more hit run console
//
const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig.development);
