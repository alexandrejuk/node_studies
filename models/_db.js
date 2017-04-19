const mongoose = require('mongoose');
const blueBird = require('bluebird');
let options = {
  db: { native_parser: true },
  server: { poolSize: 10 },
  promiseLibrary: blueBird,
  //promiseLibrary:
  //user: '',
  //pass: 'myPassword'
}


mongoose.connect('mongodb://localhost/app');
mongoose.Promise = blueBird;

let _db = mongoose.connection;

_db.on('error', console.error.bind(console, 'connection error: '));
_db.once('open', () =>{
    console.log('Application running' )
});

module.exports = _db;