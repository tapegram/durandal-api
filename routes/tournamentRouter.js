var express = require('express');
var tournamentRouter = express.Router();
var mongoose = require('mongoose');

var Tournments = require('../models/tournaments');

tournamentRouter.route('/')

.get(function(req,res,next){
  // todo, after testing, this can be removed.
  Tournments.find({})
  .exec(function (err, fencerRegList) {
    if (err) throw err;
    res.json(fencerRegList);
  });
})

.post(function(req, res, next){
  Tournments.create(req.body, function (err, tournament) {
    if (err) {
      throw err;
    }

    console.log('Tournament created!'); // todo look into debugger module
    var id = tournament._id;

    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Added the tournament with id: ' + id);
  });
})

.delete(function(req, res, next){
  // todo, after testing remove this. We shouldn't need an API to delete all fencers in the database.
  Tournments.remove({}, function (err, resp) {
    if (err) throw err;
    res.json(resp);
  });
});

tournamentRouter.route('/:tournamentId')

.get(function(req,res,next){
  Tournments.findById(req.params.tournamentId)
  .exec(function (err, tournament) {
    if (err) throw err;
    res.json(tournament);
  });
})

.put(function(req, res, next){

  Tournments.findByIdAndUpdate(req.params.tournamentId, {
    $set: req.body
  }, {
    new: true
  })
  .exec(function (err, tournament) {
    if (err) throw err;
    res.json(tournament);
  });
})

.delete(function(req, res, next){
  Tournments.findByIdAndRemove(req.params.tournamentId, function (err, resp) {
    if (err) throw err;
    res.json(resp);
  });
});

module.exports = tournamentRouter
