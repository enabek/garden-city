var User = require('../../models/user.js').User;

var checkAllFieldsProvided = function(req, res, next) {
  console.log('checking all fields are provided');

  if (!req.body.username || !req.body.password) {
    res.locals.msg = 'please provide all fields\n';
    res.status(400);
  }
  next();
};

var checkUserExists = function(req, res, next) {

  var username = req.body.username;
  User.find({username: username}, function(err, user) {
    console.log("checking if that user already exists");
    if (err) {return err;} 
    console.log('done!');
    next(user);
  })
}


var signUp = function(req, res, next) {
  console.log('signing up')


  var user = new User();



  console.log('user is:', user);
  next();
}

var test = function(req, res, next) {
  console.log('testing');
  next();
}

module.exports = {
  checkAllFieldsProvided: checkAllFieldsProvided,
  checkUserExists: checkUserExists,
  signUp: signUp,
  test: test
}
