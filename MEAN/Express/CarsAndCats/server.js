var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"))
console.log(__dirname);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/cars', function(request, response) {
    console.log(request);
    response.render('cars');
})
app.get('/cats', function(request, response) {
    console.log(request);
    response.render('cats');
})
app.get('/new/car', function(request, response) {
    console.log(request);
    response.render('form');
})
app.get('/cat/nip', function(request, response) {
    catnip = {
        name : "Catnip",
        age : 2,
        favorite_food : ["spaghetti", "steak", "paper"],
        eye_color : "brown"
    }
    let ACat = catnip;

    response.render('acat', {ACat});
})
app.get('/cat/funny-face', function(request, response) {
    funny_face = {
        name : "Funny-face",
        age : 3,
        favorite_food : ["milk", "fish", "spaghetti"],
        eye_color : "black"
    }
    let ACat = funny_face;

    response.render('acat', {ACat});
})
app.get('/cat/two-tone', function(request, response) {
    two_tone = {
        name : "Two-tone",
        age : 2,
        favorite_food : ["milk", "spaghetti", "bread"],
        eye_color : "grey"
    }
    let ACat = two_tone;

    response.render('acat', {ACat});
})

app.listen(8000, function() {
    console.log("Listening on port 8000");
})