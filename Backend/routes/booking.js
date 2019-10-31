var express = require('express');
var Bookings = require('../models/booking');
var verify = require('../verify');
// var fs = require('fs');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        Bookings.find({})
        .populate('bike', 'model')
        .populate('service', 'price name')
        .populate('mechanic', 'firstName')


            .then((bookings) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bookings);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Bookings.create(req.body)
            .then((booking) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(booking);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported!');
    })
    .delete((req, res, next) => {
        Bookings.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
    router.route('/user')
    .get((req, res, next) => {
        Bookings.find({user: req.query.user})
        .populate('bike' ,'model')
        .populate('service', 'price name')
        .populate('mechanic', 'firstName')
            .then((bikes) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bikes);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

    router.route('/book')
    .get((req, res, next) => {
        Bookings.find({book_status: req.query.book})
        .populate('bike' ,'model')
        .populate('service', 'price name')
        .populate('mechanic', 'firstName')
            .then((bikes) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bikes);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
    
router.route('/:id')
    .get((req, res, next) => {
        Bookings.findById(req.params.id)
            .then((mechanic) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(mechanic);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        Bookings.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((mechanic) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(mechanic);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
  
    



module.exports = router;