var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
        {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=37943d3b5c2a6a6401b5c9b9f0c60a68"},
        {name: "Granite Hill", image: "https://images.unsplash.com/photo-1444012104069-996724bf4a0a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=349434f9f3e9aa1d009edf26c79e64fc"},
        {name: "Mount Goat", image: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=28288b1af03ab13b4edac3df8383aa9b"}
    ]

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campground page
    res.redirect("/campgrounds");
    
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has Started!");
});