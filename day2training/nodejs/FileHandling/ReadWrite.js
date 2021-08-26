var filesystem = require("fs");

console.log ("We are opening a file!");
filesystem.writeFile('inputNewData.txt', 'Studying File Handling in Node.js!',  function(error) {
    if (error) {
        return console.error(error);
    }

    console.log ("Data successfully written to a file!");
    console.log ("Reading the recently written file data!");
    filesystem.readFile('inputNewData.txt', function (error, data) {
        if (error) {
            return console.error(error);
        }
        console.log("Result of the Asynchronous read: " + data.toString());
    });
});

/// Using Read Method
var buf = new Buffer(1024);

filesystem.open('inputNewData.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("We are now reading the file");
    filesystem.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
            console.log(err);
        }
        console.log(bytes + " bytes read");

        // Print only read bytes to avoid junk.
        if(bytes > 0){
            console.log("Displaying bytes data on the screen " + buf.slice(0, bytes).toString());
        }
    });
});
