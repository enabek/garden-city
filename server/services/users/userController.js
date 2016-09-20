var User = require('../../models/user.js').User;

var checkAllFieldsProvided = function(req, res, next) {
  console.log('checking all fields are provided');

  if (!req.body.username || !req.body.password) {
    res.status(400);
    res.send('please provide all fields\n');
  } else {
    next();
  }
};

var checkUserExists = function(req, res, next) {
  var username = req.body.username;

  User.find({username: username}, function(err, user) {
    console.log("checking if user exists");
    if (err) { return err; } 
    // do not sign up if that username is already taken
    else if (user.length) {
      res.status(400);
      res.send('that username is already taken!\n');
    }
    else if (user.length === 0) {
      next();
    }
  });
  
}


var signUp = function(req, res, next) {
  console.log('signing up');

  var user = new User();

  next();
}

module.exports = {
  checkAllFieldsProvided: checkAllFieldsProvided,
  checkUserExists: checkUserExists,
  signUp: signUp
}
