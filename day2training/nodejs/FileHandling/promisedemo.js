
var fs = require("fs");
var Promise=require("promise");

function readJSON(filename){
    return new Promise(function (fulfill, reject){
        fs.readFile(filename, "utf8", function (err, data){
            try {
                console.log("entering...")
                console.log( data);

            } catch (ex) {
                //reject(ex);
            }
        });
    });
}

readJSON("input.txt");

