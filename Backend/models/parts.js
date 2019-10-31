var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var partsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        default:''
    }
}, {
        timestamps: true
    });

var Parts = mongoose.model('Part', partsSchema);
module.exports = Parts;