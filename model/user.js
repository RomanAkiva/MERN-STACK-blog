const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, default: 'John' },
    email: { type: String },
    password: { type: String },
    role: {type: Number,
    default: 0 },
    token : { type: String},
    tokenExp : {type: number}
  });

  const User = mongoose.model('User', userSchema);
  module.exports = {User};