const { Client } = require('pg');

const dbClient = new Client({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

module.exports = {
  dbClient,
};
