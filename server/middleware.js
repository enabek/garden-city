// dependencies
var morgan = require('morgan');
var path   = require('path');

module.exports = function(app, express) {
  console.log('loaded middleware');
  // static files
  app.use(express.static(path.join(__dirname + '/../client')));

  // Routing

  // users
  var userRouter = express.Router();
  require('./services/userRouter.js')(userRouter);
  app.use('/user', userRouter);

}
