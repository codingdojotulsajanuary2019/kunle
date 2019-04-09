var express = require("express");
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bingo_db');

var BingoSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"], minlength: [2, "Name must be atleast 2 character long"]},
    meals: {type: String, required: [true, "Favorite meal is required"], minlength: [2, "Meal must be atleast 2 character long"]},
    age: {type: [Number, "Age can only be numbers"], required: [true, "Age is required"], minlength: 1},
}, {timestamps: true} );

mongoose.model('Bingo', BingoSchema);
var Bingo = mongoose.model('Bingo')

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var session = require('express-session');
app.use(session({
    secret: "fineboyXYZ",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

const flash = require('express-flash');
app.use(flash ());

var path = require('path');
app.use(express.static(path.join(__dirname + "/static")));

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var mysort = {createdAt: -1};
    Bingo.find({}, function(err, bingos) {
        if(err){
            console.log("Oops!! Try again");
        }else {
            console.log(bingos);
            res.render("index", {allBingos: bingos});
        }   
    }).sort(mysort);
})

app.get('/bingo/new', function(req, res) {
    res.render("newbingo");
})

app.post('/bingo', function(req, res) {
    console.log("POST DATA", req.body);
    var bingo = new Bingo(req.body);

    bingo.save(function(err) {
        if(err) {
            console.log("something went wrong", err);
            for(var key in err.errors) {
                console.log(err.errors[key].message);
                req.flash('invalid', err.errors[key].message);
            }
            res.redirect("/bingo/new");
        }
        else 
        {
            console.log("successfully added a bingo!");
            res.redirect("/");
        }
    })
})

app.get('/bingo/edit/:id', function(req, res) { 
    Bingo.findById(req.params.id, function(err, bingo) {
        if(err){
           res.redirect("/");
        }
        else{
            res.render("bingo", {thisBingo: bingo});
        }
    })
})

app.post('/bingo/:id', function(req, res) {
    Bingo.findByIdAndUpdate(req.params.id, { $set: {
        name: req.body.name,
        meals: req.body.meals,
        age: req.body.age
    }}, function(err, bingo){
        if(err){
             for(var key in err.errors) {
                console.log(err.errors[key].message);
                req.flash('invalid', err.errors[key].message);
            }
            res.redirect('/bingo/edit/req.params.id');
        }
        else{
            res.redirect("/");
        }
    })
});

app.get('/bingo/:id', function(req, res) {
    Bingo.findById(req.params.id, function(err, bingo) {
        if(err){
            res,redirect("/");
        }
        else{
            res.render("aBingo", {thisBingo: bingo});
        }
    })
})

app.get('/bingo/destroy/:id', function(req, res) {
    Bingo.findByIdAndRemove(req.params.id, function(err, bingo) {
        if(err){
            console.log(err);
            console.log("Cant delete");
        }
        res.redirect("/");
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})