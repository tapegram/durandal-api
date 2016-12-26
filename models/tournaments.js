var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tournamentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  tournamentDate: {
    type: Date
  },

  registrationEnd: {
    type: Date
  },

  mustBeBornBefore: {
    type: Date
  },

  mustBeBornAfter: {
    type: Date
  },

  weapon: {
    type: String,
    enum: ['epee', 'foil', 'sabre'],
    required: true
  },

  sex: {
    type: String,
    enum: ['male', 'female', 'mixed'],
    required: true
  },

  registeredFencers: [mongoose.model('Fencer').schema],

  initialSeeding: [mongoose.model('Fencer').schema],

  finalResults: [mongoose.model('Fencer').schema],

  seedingAfterPools: [mongoose.model('FencerPoolResultInfo').schema],

  // Black cards.
  excludedFencers: [mongoose.model('Fencer').schema],

  pools: [mongoose.model('Pool').schema],

}, {
  timestamps: true
});

// make this available to our Node applications
var tournaments = mongoose.model('Tournament', tournamentSchema);
module.exports = tournaments;
