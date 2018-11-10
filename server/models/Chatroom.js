const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ChatroomSchema = new Schema({
  matchId: {
    type: Number,
    required: true
  },
  messageIds: {
    type: [Number],
    required: true,
    default: []
  }
});

module.exports = Chatroom = mongoose.model('chatroom', ChatroomSchema);