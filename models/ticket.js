const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ticketSchema = new Schema({
    airport: String,
    arrival: Date
})


module.exports  = mongoose.model(
    'Ticket', 
    ticketSchema
    );

