var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var mechanicsSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    shift: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    }
}, {
        timestamps: true
    });

var Mechanics = mongoose.model('Mechanic', mechanicsSchema);
module.exports = Mechanics;