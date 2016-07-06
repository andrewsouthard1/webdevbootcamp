var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Home page");
})

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "oink",
        cow: "moo",
        duck: "quack",
        moose: "I'm a freaking moose!"
    }
    var animal = req.params.animal.toLowerCase();
  
    res.send("The " + animal + " goes " + sounds[animal]);
})

app.get("/repeat/:phrase/:num", function(req, res){
    var phrase = req.params.phrase;
    var num = Number(req.params.num);
    var finalString = "";
    for(var i = 0; i<num; i++){
        finalString = finalString + " " + phrase;
    }
    res.send(finalString);
})

app.get("*", function(req, res){
    res.send("You broke the internet!");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started.");
});