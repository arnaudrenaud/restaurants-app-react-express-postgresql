require('dotenv').config();
const express = require('express');
const apiRouter = require('./api-router');
const { dbClient } = require('./setup-db');

dbClient.connect();

const app = express();
app.use('/api', apiRouter);

app.listen(
  process.env.PORT || 3001,
  err => {
    console.log('Error running express server.');
  },
  () => {
    console.log('Express server listening on port 3001.');
  }
);
