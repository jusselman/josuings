const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights');

/* GET the new flight page */
router.get('/', flightsController.index);
router.get('/new', flightsController.newFlight);
router.get('/:id', flightsController.show);
router.post('/', flightsController.create);

module.exports = router;
