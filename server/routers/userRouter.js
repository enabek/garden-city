var userController = require('../services/users/userController.js');
var authController = require('../services/auth/authController.js');

module.exports = function(express) {
  // router for users
  var userRouter = express.Router();

  userRouter.post('/signup', userController.checkAllFieldsProvided, 
    userController.checkUserExists, userController.signUp);

  // userRouter.post('/login', userController.checkAllFieldsProvided, authController.checkCreds);

  return userRouter;
}
