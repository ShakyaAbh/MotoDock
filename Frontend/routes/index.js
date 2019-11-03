var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/customer/login', function(req, res, next) {
  res.render('customer/login', { title: 'Express' });
});

router.get('/customer/registration', function(req, res, next) {
  res.render('customer/registration', { title: 'Express' });
});

router.get('/customer/booking', function(req, res, next) {
  res.render('customer/booking', { title: 'Express' });
});

router.get('/customer/bike', function(req, res, next) {
  res.render('customer/bike', { title: 'Express' });
});

router.get('/customer/dashboard', function(req, res, next) {
  res.render('customer/dashboard', { title: 'Express' });
});

router.get('/customer/chooseNumber', function(req, res, next) {
  res.render('customer/chooseNumberPlate', { title: 'Express' });
});

router.get('/customer/old-bike', function(req, res, next) {
  res.render('customer/old-bike', { title: 'Express' });
});

router.get('/customer/new-bike', function(req, res, next) {
  res.render('customer/new-bike', { title: 'Express' });
});

router.get('/customer/profile', function(req, res, next) {
  res.render('customer/profile', { title: 'Express' });
});

router.get('/customer/password', function(req, res, next) {
  res.render('customer/password', { title: 'Express' });
});

router.get('/customer/choose_bike', function(req, res, next) {
  res.render('customer/choose_bike', { title: 'Express' });
});

router.get('/customer/service', function(req, res, next) {
  res.render('customer/service', { title: 'Express' });
});

router.get('/admin/dashboard', function(req, res, next) {
  res.render('admin/dashboard', { title: 'Express' });
});

router.get('/admin/booking', function(req, res, next) {
  res.render('admin/booking', { title: 'Express' });
});


router.get('/admin/processing', function(req, res, next) {
  res.render('admin/processing', { title: 'Express' });
});

router.get('/admin/completed', function(req, res, next) {
  res.render('admin/completed', { title: 'Express' });
});

router.get('/admin/service', function(req, res, next) {
  res.render('admin/service', { title: 'Express' });
});

router.get('/admin/mechanic', function(req, res, next) {
  res.render('admin/mechanic', { title: 'Express' });
});
router.get('/admin/login', function(req, res, next) {
  res.render('admin/login', { title: 'Express' });
});


module.exports = router;
