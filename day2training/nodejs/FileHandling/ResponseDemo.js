var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Welcome Nodejs World");
    response.write("Server Sending.....");
    console.log("data....")
    setTimeout(function()
    {
        console.log("data from timeout...");
        response.write("Response delayed...");
        response.end();
    },10000);

}).listen(11000);