var mongoose = require('mongoose');
var Bouts = require('./bouts');
var Schema = mongoose.Schema;

var poolBoutsSchema = new mongoose.Schema({
  scoreLeft: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },

  scoreRight: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  }

},
{
  discriminatorKey: 'kind',
  timestamps: true
});

module.exports = Bouts.discriminator('PoolBout', poolBoutsSchema);
