const mongoose = require('mongoose');
const _db = require('./_db');
const Schema = mongoose.Schema;

const clientSchema = new Schema({ 
    name: String,
    phone: Number
 }, {
    versionKey: false 
});

clientSchema.pre('save', next =>{
    now = new Date();
    if(!this.createAt){
    this.createAt = now;
}
next();
})
module.exports = _db.model('clients', clientSchema);
