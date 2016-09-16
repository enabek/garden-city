var mongoose   = require('mongoose');

// connection
mongoose.connect('mongodb://localhost/openGarden');

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to mongo');
});

module.exports = {
  db: db
}
