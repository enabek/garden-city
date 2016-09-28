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
