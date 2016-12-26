var express = require('express');
var fencerRouter = express.Router();
var mongoose = require('mongoose');

var Fencer = require('../models/fencers');

fencerRouter.route('/')

.get(function(req,res,next){
  // todo, after testing, this can be removed.
  Fencer.find({}, function (err, fencer) {
    if (err) throw err;
    res.json(fencer);
  })
})

.post(function(req, res, next){
  Fencer.create(req.body, function (err, fencer) {
    if (err) {
      throw err;
    }

    console.log('Fencer created!'); // todo look into debugger module
    var id = fencer._id;

    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Added the fencer with id: ' + id);
  });
})

.delete(function(req, res, next){
  // todo, after testing remove this. We shouldn't need an API to delete all fencers in the database.
  Fencer.remove({}, function (err, resp) {
    if (err) throw err;
    res.json(resp);
  });
});

fencerRouter.route('/:fencerId')

.get(function(req,res,next){
  Fencer.findById(req.params.fencerId, function (err, fencer) {
    if (err) throw err;
    res.json(fencer);
  });
})

.put(function(req, res, next){
  Fencer.findByIdAndUpdate(req.params.fencerId, {
    $set: req.body
  }, {
    new: true
  }, function (err, fencer) {
    if (err) throw err;
    res.json(fencer);
  });
})

.delete(function(req, res, next){
  Fencer.findByIdAndRemove(req.params.fencerId, function (err, resp) {
    if (err) throw err;
    res.json(resp);
  });
});

module.exports = fencerRouter
