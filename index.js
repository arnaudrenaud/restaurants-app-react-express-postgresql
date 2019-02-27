require('dotenv').config();
const express = require('express');
const path = require('path');

const apiRouter = require('./api-router');
const { dbClient } = require('./setup-db');

const PATH_TO_STATIC_DIR = 'client/build';

dbClient.connect();

const app = express();
app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, PATH_TO_STATIC_DIR)));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, PATH_TO_STATIC_DIR, 'index.html'));
});

app.listen(
  process.env.PORT || 3001,
  err => {
    console.log('Error running express server.');
  },
  () => {
    console.log('Express server listening on port 3001.');
  }
);
