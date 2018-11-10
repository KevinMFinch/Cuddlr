const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const MessageSchema = new Schema({
  senderId: {
    type: String,
    required: true
  },
  timeSent: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  messageText: {
    type: String,
    required: true,
    minlength: 1,
  }
});

module.exports = Message = mongoose.model('chatroom', ChatroomSchema);