const knex = require('knex');
const configuration = require('../../knexfile');

// Padrao Development
const connection = knex(configuration.development);

module.exports = connection;