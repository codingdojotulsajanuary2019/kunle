var express = require("express");
var app = express();

// var moment = require('moment');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quote_db');

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: [2, "Name must be atleast 2 character long"]},
    quote: {type: String, required: [true, "Quote cannot be empty"], minlength: [10, "Quote must be atleast 10 character long"]}
}, {timestamps: true} );

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')

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
    res.render("index");
})

app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    var quote = new Quote(req.body);

    quote.save(function(err) {
        if(err) {
            console.log("something went wrong", err);
            for(var key in err.errors) {
                console.log(err.errors[key].message);
                req.flash('invalid', err.errors[key].message);
            }
            res.render("index");
        }
        else 
        {
            console.log("successfully added a quote!");
            res.redirect("/quotes");
        }
    })
})

app.get('/quotes', function(req, res) {
    var mysort = {createdAt: -1};
    // var formatted_date = moment(Quote.createdAt).format('YYYY-DD-MM');
    Quote.find({}, function(err, quotes) {
        if(err){
            console.log("Oops!! Try again");
        }else {
            console.log(quotes);
            res.render("quote", {allquotes: quotes});
        }   
    }).sort(mysort);
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})