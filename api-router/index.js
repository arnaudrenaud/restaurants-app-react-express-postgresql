const { Router } = require('express');
const { client: dbClient } = require('../setup-db');

const router = Router()
  .get('/areas', async (req, res) => {
    const result = await dbClient.query('SELECT * FROM areas;');
    res.send(result.rows);
  })
  .get('/restaurants', (req, res) => {
    const areaId = req.query.area_id;
    if (areaId) {
      // get restaurants filtered by areaId
    } else {
      // get all restaurants
    }
  });

module.exports = router;
