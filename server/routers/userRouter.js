module.exports = function(express) {
  // router for users
  var userRouter = express.Router();

  userRouter.get('/fetch', function(req, res, next) {
    next();
  });

  return userRouter;
}
