const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ChatroomSchema = new Schema({
  matchId: {
    type: String,
    required: true
  },
  messageIds: {
    type: [String],
    required: true,
    default: []
  }
});

module.exports = Chatroom = mongoose.model('chatroom', ChatroomSchema);