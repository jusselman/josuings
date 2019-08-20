var express = require('express');
var router = express.Router();
var ticketsController = require('../controllers/tickets');

// router.get('/flight/:id/tickets')

router.get('/flights/:id/tickets/new', ticketsController.new);

module.exports = router