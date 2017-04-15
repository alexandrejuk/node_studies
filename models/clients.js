const mongoose = require('mongoose');
const _db = require('./_db');


const clientSchema = mongoose.Schema( { 
    name: String,
    phone: Number
 }, {
    versionKey: false 
});

module.exports = mongoose.model('clients', clientSchema);
