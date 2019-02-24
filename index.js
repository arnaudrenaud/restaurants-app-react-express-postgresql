const express = require('express');
const apiRouter = require('./api-router');

const app = express();
app.use('/api', apiRouter);

app.listen(
  3001,
  err => {
    console.log('Error running express server.');
  },
  () => {
    console.log('Express server listening on port 3001.');
  }
);
