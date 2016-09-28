// dependencies
var morgan = require('morgan');
var path   = require('path');
var bodyParser = require('body-parser');

var end = function(req, res) {
  console.log('ending response / request cycle');
  res.send(res.locals.msg);
}

module.exports = function(app, express) {

  // logging and parsing
  app.use(bodyParser.urlencoded( {extended: false} ));
  app.use(bodyParser.json());
  app.use(morgan('dev'));

  // static files
  app.use(express.static(path.join(__dirname + '/../client')));

  // auth
  var passport = require('passport');
  var session = require('express-session');

  require('./config/passport.js')(passport);

  app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions


  // Routing
  
  // users
  var userRouter = require('./routers/userRouter.js')(express);
  app.use('/user', userRouter, end);
}
