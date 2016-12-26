var express = require('express');
var poolBoutRouter = express.Router();
var mongoose = require('mongoose');

var PoolBout = require('../models/poolBouts');

poolBoutRouter.route('/')

.get(function(req,res,next){
  // todo, after testing, this can be removed.
  PoolBout.find({}, function (err, bout) {
    if (err) throw err;
    res.json(bout);
  })
})

.post(function(req, res, next){
  PoolBout.create(req.body, function (err, bout) {
    if (err) {
      throw err;
    }

    console.log('Bout created!'); // todo look into debugger module
    var id = bout._id;

    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Added the bout with id: ' + id);
  });
})

.delete(function(req, res, next){
  PoolBout.remove({}, function (err, resp) {
    if (err) throw err;
    res.json(resp);
  });
});

poolBoutRouter.route('/:boutId')

.get(function(req,res,next){
  PoolBout.findById(req.params.boutId, function (err, bout) {
    if (err) throw err;
    res.json(bout);
  });
})

.put(function(req, res, next){
  PoolBout.findByIdAndUpdate(req.params.boutId, {
    $set: req.body
  }, {
    new: true
  }, function (err, bout) {
    if (err) throw err;
    res.json(bout);
  });
})

.delete(function(req, res, next){
  PoolBout.findByIdAndRemove(req.params.boutId, function (err, resp) {
    if (err) throw err;
    res.json(resp);
  });
});

module.exports = poolBoutRouter
