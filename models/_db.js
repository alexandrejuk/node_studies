const mongoose = require('mongoose');

let options = { 
                server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } 
              }; 

mongoose.connect('mongodb://localhost/app');

const _db = mongoose.connection;

_db.on('error', console.error.bind(console, 'connection error: '));
_db.once('open', function() {console.log('Application running' )});

module.exports = _db;