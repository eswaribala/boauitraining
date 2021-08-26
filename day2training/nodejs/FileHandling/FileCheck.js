var filesystem = require("fs");

console.log ("We are opening a file!");
filesystem.stat ('input.txt', function (error, stats) {
    if (error) {
        return console.error(error);
    }
    console.log(stats);
    console.log ("File information retrieved successfully!");

    // Checking the file type
    console.log ("isFile ? " + stats.isFile());
    console.log ("isDirectory ? " + stats.isDirectory());
    console.log ("isBlockDevice ? " + stats.isBlockDevice());
    console.log ("isCharacterDevice ? " + stats.isCharacterDevice());
    console.log ("isSymbolicLink ? " + stats.isSymbolicLink());
    console.log ("isFIFO ? " + stats.isFIFO());
    console.log ("isSocket ? " + stats.isSocket());
});
