var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = mongoose.model('User', new Schema({
  user: String,
  password: String,
  email: String,
  admin: Boolean
}));

module.exports = {
  user: user
}

