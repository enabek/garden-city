// dependencies
var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');
var morgan     = require('morgan');

var jwt        = require('jsonwebtoken'); // used to create, sign, and verify tokens

// server and connection
var app = express();
var port = 8000;
app.listen(port, function(){
  console.log('Listening');
});

// authentication
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressSession = require('express-session');

require('./config/setUpPassport.js')(passport, LocalStrategy, expressSession);











// authentication
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var expressSession = require('express-session');
// app.use(expressSession({secret: 'secretSauce',
//                         resave: false,
//                         saveUninitialized: false}));
// app.use(passport.initialize());
// app.use(passport.session());

// // passport config
// var User = require('./models/user.js');
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// db and models
var db   = require('./config/database.js');

// middleware
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());
app.use(morgan('dev'));

// api 
app.use(express.static(path.join(__dirname + '/../client')));

app.use(function(req, res, next){
  console.log('Hitting the server at all');
  console.log('req body: ', req);
  next();
});
