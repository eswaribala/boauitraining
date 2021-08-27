var mongoose = require('mongoose');
Schema = mongoose.Schema;

var ccSchema = new mongoose.Schema({
    ccNo: Number,
    cardHolderName:String,
    expiryDate:String,
    limit:Number,
    type:String
})


module.exports.CCModel = mongoose.model('CCModel',ccSchema );

