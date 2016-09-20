var userController = require('../services/users/userController.js');

module.exports = function(express) {
  // router for users
  var userRouter = express.Router();

  userRouter.post('/signup', userController.checkAllFieldsProvided, 
    userController.checkUserExists, userController.signUp);

  return userRouter;
}
