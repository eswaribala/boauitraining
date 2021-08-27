var mongoose = require('mongoose');
var CCModel= require('./ccschemademo').CCModel;
var config=require('./config');
mongoose.connect('mongodb://localhost:27017/bankdb');

var options = {
    user: config.user,
    pass: config.password,
    auth: {
        authdb: config.authdb
    }
}

//mongoose.connect(config.url, config.mongodb, config.mongoport);
module.exports.Add=function(ccNo,cardHolderName,expiryDate,limit,type)
{
    console.log(ccNo);

    var db = mongoose.connection;
    db.once('open', function() {
    });

    var obj = new CCModel(
        {
            ccNo:ccNo,
            cardHolderName:cardHolderName,
            expiryDate:expiryDate,
            limit:limit,
            type:type

        });
    obj.save(function(err,result){
        if(!err)
            console.log(result);

    });

}







