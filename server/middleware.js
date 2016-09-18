// dependencies
var morgan = require('morgan');

var userHook = function(res, req, next) {
  console.log('inside the user router');
  next();
}

module.exports = function(app, express) {

  var userRouter = express.Router();
  app.use('/users', userRouter);

  userRouter.use('/', userHook);

  // userRouter.get('/', function(req, res, next) {
  //   console.log('first function');
  //   next()
  // }, function(req, res) {
  //   console.log('second function!')
  //   res.send('something to give back to you!');
  // });

}
