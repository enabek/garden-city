var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  user: String,
  password: String,
  email: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
