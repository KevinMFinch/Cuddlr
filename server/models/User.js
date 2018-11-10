const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    // required: true,
  },
  hashed_password: {
    type: String,
    // required: true,
  },
  age: {
    type: Number,
    // required: true
  },
  university: {
    type: String,
    // required: false
  },
  isInUniversity: {
    type: Boolean,
    // required: false,
    // default: false
  },
  positionRankings: {
    type: [String],
    // required: false,
    default: []
  },
  size: {
    type: String,
    // required: false,
  },
  lastLocation: {
    lat: { type: Number },
    long: { type: Number },
  },
  matchIds: {
    type: [String],
    required: true,
    default: []
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    // required: true
  },
  preferredGender: {
    type: String,
    // required: true
  },
  likedIds: {
    type: [String],
    required: true,
    default: []
  },
  dislikedIds: {
    type: [String],
    required: true,
    default: []
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = {User};