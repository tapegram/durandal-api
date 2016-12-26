var express = require('express');
var fencerPoolResultInfoRouter = express.Router();
var mongoose = require('mongoose');

var FencerPoolResultInfo = require('../models/fencerPoolResultInfo');

fencerPoolResultInfoRouter.route('/')

.get(function(req,res,next){
  // todo, after testing, this can be removed.
  FencerPoolResultInfo.find({}, function (err, info) {
    if (err) throw err;
    res.json(info);
  })
})

.post(function(req, res, next){
  FencerPoolResultInfo.create(req.body, function (err, info) {
    if (err) {
      throw err;
    }

    console.log('Info created!'); // todo look into debugger module
    var id = info._id;

    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Added the info with id: ' + id);
  });
})

.delete(function(req, res, next){
  FencerPoolResultInfo.remove({}, function (err, resp) {
    if (err) throw err;
    res.json(resp);
  });
});

fencerPoolResultInfoRouter.route('/:infoId')

.get(function(req,res,next){
  FencerPoolResultInfo.findById(req.params.infoId, function (err, info) {
    if (err) throw err;
    res.json(info);
  });
})

.put(function(req, res, next){
  FencerPoolResultInfo.findByIdAndUpdate(req.params.infoId, {
    $set: req.body
  }, {
    new: true
  }, function (err, info) {
    if (err) throw err;
    res.json(info);
  });
})

.delete(function(req, res, next){
  FencerPoolResultInfo.findByIdAndRemove(req.params.infoId, function (err, resp) {
    if (err) throw err;
    res.json(resp);
  });
});

module.exports = fencerPoolResultInfoRouter;
