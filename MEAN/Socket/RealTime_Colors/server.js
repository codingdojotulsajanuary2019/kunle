var express = require("express");
var app = express();

const server = app.listen(8000);
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var BgColor;
io.on('connection', function(socket){
    socket.emit('background', {color : BgColor});

    socket.on('color', function(data){
        BgColor = data.color;
        io.emit('background', {color : data.color});
    })
})
app.get('/', function(req, res) {
    res.render("index");
})