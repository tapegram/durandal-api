var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var boutSchema = new Schema({
  fencerLeft: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fencer',
    required: true
  },

  fencerRight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fencer',
    required: true
  },

  scoreLeft: {
    type: Number,
    default: 0,
    min: 0
  },

  scoreRight: {
    type: Number,
    default: 0,
    min: 0
  },

  priority: {
    type: String,
    enum: ['left', 'right', 'none'],
    default: 'none'
  },

  status: {
    type: String,
    enum: ['not started', 'in progress', 'final'],
    default: 'not started',
    required: true
  },

  // Expected to be in milliseconds.
  timeRemaining: {
    type: Number,
    default: 180000,
    required: true,
    max: 180000,
    min: 0
  }

}, {
  discriminatorKey: 'kind',
  timestamps: true
});

// make this available to our Node applications
var bouts = mongoose.model('Bout', boutSchema);
module.exports = bouts;
