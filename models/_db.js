const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/app');

const _db = mongoose.connection;

_db.on('error', console.error.bind(console, 'Connection error: '));
_db.once('open', function() {console.log('Application running' )});

module.exports = _db;