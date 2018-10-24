const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  steamId: {
    type: String
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  }
});

module.exports = mongoose.model('user', userSchema);
