// dependencies
var morgan = require('morgan');
var path   = require('path');
var bodyParser = require('body-parser');

var end = function(req, res) {
  console.log('ending response / request cycle');
  res.send(res.locals.msg);
}

module.exports = function(app, express) {
  console.log('loaded middleware');

  // logging and parsing
  app.use(bodyParser.urlencoded( {extended: false} ));
  app.use(bodyParser.json());
  app.use(morgan('dev'));

  // static files
  app.use(express.static(path.join(__dirname + '/../client')));

  // Routing
  
  // users
  var userRouter = require('./routers/userRouter.js')(express);
  app.use('/user', userRouter, end);
}
