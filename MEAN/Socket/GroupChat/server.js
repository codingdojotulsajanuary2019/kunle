var express = require("express");
var app = express();

const server = app.listen(8000);
const io = require('socket.io')(server);
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var allUsersMessages = [];
io.on('connection', function(socket){
    // console.log(socket.id);
    socket.emit('messages', {allmessages : allUsersMessages});

    socket.on('newMessage', function(data) {
        allUsersMessages.push(data);
        console.log(data);
        // console.log(socket.id);
        io.emit('aMessage', {message : data});
    });
});

app.get('/', function(req, res) {
    res.render("index");
})