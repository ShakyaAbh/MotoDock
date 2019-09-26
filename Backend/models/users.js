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
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);