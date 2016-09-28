var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user.js').User;

module.exports = function(passport) {

  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  console.log('configuring passport')

  passport.serializeUser(function (user, next) {
    next(null, user.username);
  });

  passport.deserializeUser(function (user, next) {
    next(null, user.username);
  })

  // strategy
  passport.use(new LocalStrategy(
    function(username, password, next) {
      User.findOne({ username:username }, function (err, user) {
        if (err) { 
          return next(err); 
        }
        if (!user) {
          return next(null, false); 
        }
        if (!user.validPassword(password)) { 
          return next(null, false);
        }
        return next(null, user);
      });
    }
  ));

};
