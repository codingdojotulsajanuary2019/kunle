var express = require("express");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
})
app.post('/survey', function(req, res) {
    console.log(req.body.name);
    result = {
        name : req.body.name,
        location : req.body.dojo,
        lang : req.body.language,
        comm : req.body.comment
    }
    res.render('success', {result});
})

app.listen(8000, function(){
    console.log("Listening on port 8000");
})