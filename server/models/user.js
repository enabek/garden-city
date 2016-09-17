// user model
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {type: String, lowercase: true, unique: true},
  hash: String,
  salt: String
});

mongoose.model('User', UserSchema);

// crypt
var crypto = require('crypto');

UserSchema.methods.setPassword = function(password) {
  this.hash = crypto.randomBytes(16).toString('hex');

  this.salt = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');

  return this.hash === hash;
}

// web tokens
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

UserSchema.methods.generateJWT = function() {

  // set expiration to 10 days
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);
  // DEBUGGING
  console.log('inside generateJWT');

  return jwt.sign({
    _id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, 'catfood');

}
