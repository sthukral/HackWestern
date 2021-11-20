//const bcrypt = require('bcrypt');
//const crypto = require('crypto');
const { isInteger } = require('lodash');
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  //password: String,
  //passwordResetToken: String,
  //passwordResetExpires: Date,
  //emailVerificationToken: String,
  //emailVerified: Boolean,

  //snapchat: String,
  //facebook: String,
  //twitter: String,
  //google: String,
  //github: String,
  //instagram: String,
  //linkedin: String,
  //steam: String,
  //twitch: String,
  //quickbooks: String,
  //tokens: Array,

  profile: {
    name: String,
    dateOfBirth: Date,
    gender: String,
    occupation: String,
    vaccineName: String,
    vaccineNum: Number,
    vaccineEvent: String
  }
}, { timestamps: true });


const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
