var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let User = new Schema({
    fullName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    admin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);