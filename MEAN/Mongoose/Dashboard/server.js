var express = require("express");
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bingo_db');

var BingoSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"], minlength: [2, "Name must be atleast 2 character long"]},
    meals: {type: String, required: [true, "Favorite meal is required"], minlength: [2, "Meal must be atleast 2 character long"]},
    age: {type: Number, required: [true, "Age is required"], min: [1, "Age must be 1 or greater"], max: [100, "Age cannot be greater than 100"]}
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

app.listen(8000, function() {
    console.log("listening on port 8000");
})