var express = require('express');
var router = express.Router();
//var formatter = require('../modules/formatNumber');
  router.post('/add', function(req, res) {
    console.log('request ', req.body);
    var x = parseInt(req.body.x);
    var y = parseInt(req.body.y);
    var answer = {
      answer : formatter(x + y)
    };
    res.send(answer);
  });
  router.post('/sub', function(req, res) {
    console.log('request ', req.body);
    var x = parseInt(req.body.x);
    var y = parseInt(req.body.y);
    var answer = {
      answer : formatter(x - y)
    };
    res.send(answer);
  });

  router.post('/mult', function(req, res) {
    console.log('request ', req.body);
    var x = parseInt(req.body.x);
    var y = parseInt(req.body.y);
    var answer = {
      answer : formatter(x * y)
    };
    res.send(answer);
  });

  router.post('/div', function(req, res) {
    console.log('request ', req.body);
    var x = parseInt(req.body.x);
    var y = parseInt(req.body.y);
    var answer = {
      answer : formatter(x / y)
    };
    res.send(answer);
  });

  module.exports = router;
