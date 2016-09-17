// dependencies
var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');
var morgan     = require('morgan');


// server and connection
var app = express();
var port = 8000;
app.listen(port, function(){
  console.log('Listening');
});

var db   = require('./config/database.js');

// middleware
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());
app.use(morgan('dev'));

// authentication
var passport = require('passport');
require('./models/user.js');
require('./config/passport.js');
app.use(passport.initialize());

// api 
app.use(express.static(path.join(__dirname + '/../client')));

app.use(function(req, res, next){
  console.log('Hitting the server at all');
  console.log(req.body);
  next();
});

// routing
// require('./models/user.js');
var mongoose = require('mongoose');
var User = mongoose.model('User');

app.post('/signup', function(req, res, next) {
  console.log('signing up!:  password:', req.body.password, ' username: ', req.body.username);

  if (!req.body.username || !req.body.password) {
    res.status(400).json({message: 'Please fill out all fields\n'});
  }

  var user = new User();
  user.username = req.body.username;
  user.setPassword(req.body.password);

  user.save(function (err){
    console.log('saving the user');
    if(err){ return next(err); }

    return res.json({token: user.generateJWT()})
  });
});
