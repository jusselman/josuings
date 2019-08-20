const Flight = require('../models/flight');

module.exports = {
    index,
    newFlight,
    create,
    show
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
            res.render(`flights/show`, {
                title: "",
                flight

            });
        });
    };
  



function create(req, res) {
    let flight = new Flight(req.body)

    flight.save(function(err) {
        if (err) {
            res.render('flights/new', { title: 'New Flights' });
        } else {
            res.redirect('/flights');
        }
    });
}

function index(req, res) {
    // Find all Flights
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { 
            title: 'Flights Index', 
            flights 
        });
    })
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'New Flights' });
}