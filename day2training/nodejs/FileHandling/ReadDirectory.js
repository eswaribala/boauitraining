/**
 * Created by BALASUBRAMANIAM on 24/08/2017.
 */
var fs = require("fs");
console.log(process.cwd())

fs.readFile(process.cwd() + "\\copy.jpg", function(err, data)
{
    if(err)
        console.log(err)
    else
        console.log(data.toString());
});


console.log("Going to read directory /FileHandling");
fs.readdir(".",function(failure, result){

    if (failure) {
        return console.error(failure);
    }
    result.forEach( function (file){
        console.log( file );
    });
});
