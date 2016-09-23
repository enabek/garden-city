// dependencies
var express    = require('express');

// server and connection
var app = express();
var port = 8000;
app.listen(port, function(){
  console.log('Listening');
});

require('./config/database.js');

// middleware
require('./middleware.js')(app, express);

// authentication
// var passport = require('passport');
// require('./models/user.js');
// app.use(passport.initialize());

// app.post('/login', function(req, res, next) {
//   if(!req.body.username || !req.body.password){
//     return res.status(400).json({message: 'Please fill out all fields\n'});
//   }

//   passport.authenticate('local', function(err, user, info){
//     if (err) { return next(err); };
//     if (!user) {res.redirect('/signup')};
//     if (user) {
//       return res.json({token: user.generateJWT()});
//     } else {
//       return res.status(401).json(info);
//     }
//   })(req, res, next);
// });

// var jwt = require('express-jwt');
// var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

// // testing
// app.post('/membersOnly', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     if (user) {
//       console.log("reached members only!");
//     }
//     res.send(user);
//   })(req, res, next);
// });
