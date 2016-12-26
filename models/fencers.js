var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fencerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  middleName: {
    type: String,
    default: ''
  },

  dob: {
    type: Date,
    required: true,
    max: Date.now()
  },

  sex: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },

  epeeRating: {
    type: String,
    enum: ['A', 'B', 'C', 'D', 'E', 'U'],
    required: true
  },

  epeeRatingYear: {
    type: Number
  },

  foilRating: {
    type: String,
    enum: ['A', 'B', 'C', 'D', 'E', 'U'],
    required: true
  },

  foilRatingYear: {
    type: Number
  },

  sabreRating: {
    type: String,
    enum: ['A', 'B', 'C', 'D', 'E', 'U'],
    required: true
  },

  sabreRatingYear: {
    type: Number
  },
}, {
  timestamps: true
});

// make this available to our Node applications
var fencers = mongoose.model('Fencer', fencerSchema);
module.exports = fencers;
