var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var partsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    modelNumber: {
        type: String,
        required: true
    },
    entryDate: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    }
}, {
        timestamps: true
    });

var Parts = mongoose.model('Part', partsSchema);
module.exports = Parts;