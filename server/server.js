//dependencies
var express = require('express');
var path = require('path');

//server and connection
var app = express();
var port = 8000;

app.listen(port, function(){
  console.log('Listening');
});

app.use(function(req, res, next){
  console.log('Hitting the server at all');
  next();
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../index.html'));
});