const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const MatchSchema = new Schema({
  userId1: {
    type: Number
  },
  userId2: {
    type: Number
  }
});

module.exports = Match = mongoose.model('match', MatchSchema);