// dependencies
var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
// var dbConfig   = require('./config/database.js');

var jwt        = require('jsonwebtoken'); // used to create, sign, and verify tokens

// server and connection
var app = express();
var port = 8000;
app.listen(port, function(){
  console.log('Listening');
});

// database connection
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/openGarden');

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected');
});



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
