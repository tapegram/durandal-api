var mongoose = require('mongoose');
var Bouts = require('./bouts');
var Schema = mongoose.Schema;

var DEBoutsSchema = new mongoose.Schema({
  scoreLeft: {
    type: Number,
    default: 0,
    min: 0,
    max: 15
  },

  scoreRight: {
    type: Number,
    default: 0,
    min: 0,
    max: 15
  },

  period: {
    type: Number,
    default: 1,
    min: 1,
    max: 3
  }

},
{
  discriminatorKey: 'kind',
  timestamps: true
});

module.exports = Bouts.discriminator('DEBout', DEBoutsSchema);
