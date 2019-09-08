var express = require('express');
var User = require('../models/users');
var passport = require('passport');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.json(req.user);
});

router.post('/signup', (req, res, next) => {
  User.register(new User(req.body),
    req.body.password, (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ err: err });
      }
      else {
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({ success: true, status: 'Registration Successful!' });
        });
      }
    });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.user);
});

router.get('/logout', (req, res, next) => {
  if (req.user) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.send("You're logged out!");
    // res.redirect('/');
  } else {
    let err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});

module.exports = router;
