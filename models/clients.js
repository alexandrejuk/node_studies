const mongoose = require('mongoose');
const _db = require('./_db');
const Schema = mongoose.Schema;

const clientSchema = new Schema({ 
    name: String,
    phone: Number
 }, {
    versionKey: false 
});

module.exports = _db.model('clients', clientSchema);
