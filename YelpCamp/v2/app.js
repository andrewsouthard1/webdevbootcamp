var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var campgrounds = [
        {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=37943d3b5c2a6a6401b5c9b9f0c60a68"},
        {name: "Granite Hill", image: "https://images.unsplash.com/photo-1444012104069-996724bf4a0a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=349434f9f3e9aa1d009edf26c79e64fc"},
        {name: "Mount Goat", image: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=28288b1af03ab13b4edac3df8383aa9b"}
    ]

mongoose.connect("mongodb://localhost/yelp_camp")
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

Campground.create(
    {
        
        name: "Blue Canyon", 
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Massive canyon, great time for all!"
        
    }, function(err, data){
        if(err){
            console.log("ERROR");
        }
        else{
            console.log("Newly created campground!");
            console.log(data);
        }
    });

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds", {campgrounds:allCampgrounds});
        }
    });
    // res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, data){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
    //redirect back to campground page
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res){
    res.send("Coming soon!");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has Started!");
});