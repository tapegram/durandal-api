var express = require('express');
var poolRouter = express.Router();
var mongoose = require('mongoose');

var Pool = require('../models/pools');

poolRouter.route('/')

.get(function(req,res,next){
  // todo, after testing, this can be removed.
  Pool.find({}, function (err, pool) {
    if (err) throw err;
    res.json(pool);
  })
})

.post(function(req, res, next){
  Pool.create(req.body, function (err, pool) {
    if (err) {
      throw err;
    }

    console.log('Pool created!'); // todo look into debugger module
    var id = pool._id;

    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Added the pool with id: ' + id);
  });
})

.delete(function(req, res, next){
  Pool.remove({}, function (err, resp) {
    if (err) throw err;
    res.json(resp);
  });
});

poolRouter.route('/:poolId')

.get(function(req,res,next){
  Pool.findById(req.params.poolId, function (err, pool) {
    if (err) throw err;
    res.json(pool);
  });
})

.put(function(req, res, next){
  Pool.findByIdAndUpdate(req.params.poolId, {
    $set: req.body
  }, {
    new: true
  }, function (err, pool) {
    if (err) throw err;
    res.json(pool);
  });
})

.delete(function(req, res, next){
  Pool.findByIdAndRemove(req.params.poolId, function (err, resp) {
    if (err) throw err;
    res.json(resp);
  });
});

module.exports = poolRouter
