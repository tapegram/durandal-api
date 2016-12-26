var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fencerPoolResultInfoSchema = new Schema({

  fencer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fencer',
    required: true
  },

  wins: {
    type: Number,
    required: true,
    min: 0
  },

  numBouts: {
    type: Number,
    required: true,
    min: 0
  },

  touchesFor: {
    type: Number,
    required: true,
    min: 0
  },

  touchesAgainst: {
    type: Number,
    required: true,
    min: 0
  }

}, {
  timestamps: true
});

// make this available to our Node applications
module.exports = mongoose.model('FencerPoolResultInfo', fencerPoolResultInfoSchema);
