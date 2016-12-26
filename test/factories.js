var Fencer =               require('../models/fencers');
var PoolBout =             require('../models/poolBouts');
var FencerPoolResultInfo = require('../models/fencerPoolResultInfo');
var Pool =                 require('../models/pools');


module.exports.validFencer = function() {
  var f = new Fencer();
  f.firstName = "Test";
  f.lastName = "Test";
  f.dob = Date.now - 100000;
  f.sex = 'male';
  f.epeeRating = 'A';
  f.epeeRatingYear = 2014;
  f.foilRating = 'C';
  f.foilRatingYear = 2016;
  f.sabreRating = 'U';

  return f;
};

module.exports.validPoolBout = function() {
  var pb = new PoolBout();
  pb.scoreLeft = 5;
  pb.scoreRight = 3;
  pb.fencerLeft = module.exports.validFencer();
  pb.fencerRight = pb.fencerLeft;
  pb.status = 'final';
  pb.timeRemaining = 5000;

  return pb;
}

module.exports.validFencerPoolResultInfo = function() {
  var f = new FencerPoolResultInfo();
  f.fencer = module.exports.validFencer();
  f.wins = 4;
  f.numBouts = 6;
  f.touchesFor = 25;
  f.touchesAgainst = 15;

  return f;
}

module.exports.validPool = function() {
  var p = new Pool();
  p.poolNumber = 1;
  p.stripNumber = 1;
  p.bouts = [module.exports.validPoolBout];
  p.fencers = [module.exports.validFencer(), module.exports.validFencer()];
}
