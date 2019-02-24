const { Router } = require('express');

const RESTAURANTS = [
  {
    id: '176542563',
    name: 'Chez Gladines',
    areaId: '9876162356',
    address: '57 boulevard Saint-Germain',
  },
  {
    id: '27652673',
    name: 'Brasserie de la gare',
    areaId: '55612',
    address: '37 rue Saint-Martin',
  },
];

const router = Router()
  .get('/areas', (req, res) => {
    res.send([{ id: 1, name: 'Quartier latin' }, { id: 2, name: 'Charonne' }]);
  })
  .get('/restaurants', (req, res) => {
    const areaId = req.query.area_id;
    if (areaId) {
      res.send(RESTAURANTS.filter(restaurant => restaurant.areaId === areaId));
    } else {
      res.send(RESTAURANTS);
    }
  });

module.exports = router;
