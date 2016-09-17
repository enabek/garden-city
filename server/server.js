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






// api 
app.use(express.static(path.join(__dirname + '/../client')));

app.use(function(req, res, next){
  console.log('Hitting the server at all');
  console.log('req body: ', req);
  next();
});
