var express = require('express');
var User = require('../models/users');
var passport = require('passport');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
  console.log(req.user);
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
    res.redirect('/');
  } else {
    let err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});


router.route('/:id')
    .get((req, res, next) => {
        User.findById(req.params.id)
            .then((hero) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(hero);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((hero) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(hero);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        // Heroes.findById(req.params.id)
        //     .then((hero) => {
        //         let path = './public/uploads/' + hero.image;
        //         fs.unlink(path, (err) => {
        //             if (err) console.log(err);
        //         })
        //         hero.delete()
        //             .then((reply) => {
        //                 res.statusCode = 200;
        //                 res.setHeader('Content-Type', 'application/json');
        //                 res.json(reply);
        //             })
        //     }).catch((err) => next(err));

        User.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });



module.exports = router;
