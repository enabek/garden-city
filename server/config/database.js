var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/open-garden');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
