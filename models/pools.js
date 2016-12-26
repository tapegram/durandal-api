var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var poolSchema = new Schema({

  poolNumber: {
    type: Number,
    required: true,
    min: 1
  },

  stripNumber: {
    type: Number,
    required: true,
    min: 1
  },

  status: {
    type: String,
    enum: ['not started', 'in progress', 'final'],
    default: 'not started',
  },

  bouts: [mongoose.model('PoolBout').schema],

  fencers: [mongoose.model('Fencer').schema],

}, {
  timestamps: true
});

module.exports = mongoose.model('Pool', poolSchema);
