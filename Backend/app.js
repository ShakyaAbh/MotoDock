var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');
var verify = require('./verify');
var cors = require('cors');

const testurl = 'mongodb://localhost:27017/vehicletest';
const url = 'mongodb://localhost:27017/mydb';
const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
});

connect.then((db) => {
    console.log("Connected to mongodb server");
}, (err) => { console.log(err); });

var usersRouter = require('./routes/users');




var app = express();

app.use(logger('dev'));
app.use(express.json()); // same as bodyParser.json()
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    name: 'session-id',
    secret: 'mysessionkey',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
}));

app.use(passport.initialize());
app.use(passport.session());



app.use('*', cors({
    origin: 'http://localhost:5500',
    credentials: true
}));


app.use('/users', usersRouter);
// app.use(authenticate);
// app.use(verify.user);





module.exports = app;
