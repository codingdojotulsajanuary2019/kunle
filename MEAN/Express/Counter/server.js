var express = require("express");
var session = require('express-session');
var app = express();


app.use(session({
    secret: 'clearRoad',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    if(req.session.count === undefined){
        req.session.count = 1;
    }
    else{
        req.session.count ++;
    }   
    res.locals.count = req.session.count;

    res.render("index");
})

app.get('/add2', function(req, res) {
    req.session.count ++;
    res.redirect('/');
})

app.get('/reset', function(req, res) {
    req.session.destroy();
    res.redirect('/');
})

app.listen(8000, function() {
    console.log("Listening on localhost: 8000");
})