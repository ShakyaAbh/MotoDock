var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var bikesSchema = new Schema({
    company: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    state:{
        type: String
    },
    registrationNumber: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    insurancePolicy: {
        type: String
    },
    insuranceRenew: {
        type: String
    },
    manufactureYear: {
        type: Number
    },
    image: {
        type: String,
        default: ''
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
        timestamps: true
    });

var Bikes = mongoose.model('Bike', bikesSchema);
module.exports = Bikes;