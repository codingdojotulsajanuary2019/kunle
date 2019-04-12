var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/mongoose')

var session = require('express-session');
app.use(session({
    secret: "clearRoad77",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));
const flash = require('express-flash');
app.use(flash ());

var path = require('path');
app.use(express.static(path.join(__dirname + "/static")));

app.set('views', path.join(__dirname + '/client/views'));
app.set('view engine', 'ejs');

require('./server/config/routes')(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})