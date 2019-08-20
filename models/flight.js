const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: String,
    origin: String,
    flightNo: Number,
    departs: Date,
}, {
    timestamps: true
});

module.exports  = mongoose.model(
    'Flight', 
    flightSchema
    );

