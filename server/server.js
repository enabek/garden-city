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

app.use(express.static(path.join(__dirname + '/../client')));

// app.get('/', function(req, res){
//   res.sendFile(path.join(__dirname + '/../index.html'));
// });

app.get('/test', function(req, res){
  console.log(req);
  res.send('Test is working');
});