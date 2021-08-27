var express = require("express");
var config=require("./config");
var bodyParser =require("body-parser");

var cors=require("cors");
var app = express();
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get("/", function(request, response) {
    response.send("Testing Express ....!");
});
app.post('/addcc',function(request,response)
{
    console.log("Testing...")
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    response.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    response.setHeader('Access-Control-Allow-Credentials', true);
    console.dir(request.query);
    console.log(request);
    //refAddState.Add(request.query.ID,request.query.Name);

    response.end("Object received successfully");

});

app.set('port',config.port);
app.listen(app.get('port'), function()
{
    console.log('Server started at ....'+app.get('port'));
})
