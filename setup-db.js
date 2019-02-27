const { Client } = require('pg');

const dbClient = new Client(process.env.DATABASE_URL);

module.exports = {
  dbClient,
};
