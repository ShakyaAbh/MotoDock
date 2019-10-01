var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var bookingsSchema = new Schema({
    company: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    registration: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    query: {
        type: String,
        required: true
    },
}, {
        timestamps: true
    });

var Bookings = mongoose.model('Booking', bookingsSchema);
module.exports = Bookings;