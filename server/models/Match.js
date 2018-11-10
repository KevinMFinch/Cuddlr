const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const MatchSchema = new Schema({
  userId1: {
    type: String
  },
  userId2: {
    type: String
  }
});

const Match = mongoose.model('match', MatchSchema);
module.exports = {Match} 