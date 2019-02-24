require('dotenv').config();
const mysql = require('mysql');

const {
  CREATE_AREAS_TABLE_QUERY,
  INSERT_AREAS_QUERY,
} = require('./sql-queries');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
connection.connect();

connection.query(CREATE_AREAS_TABLE_QUERY, function(error, results) {
  if (error) throw error;
  console.log('Created table areas', results);
});
connection.query(INSERT_AREAS_QUERY, function(error, results) {
  if (error) throw error;
  console.log('Inserted areas', results);
});

connection.end();
