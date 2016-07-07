var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
})

app.get("/result", function(req, res){
    var movieSearch = req.query.search;
    var url = ("http://www.omdbapi.com/?s=" + movieSearch);
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie app has started!");
});