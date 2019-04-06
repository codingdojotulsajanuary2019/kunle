var express = require("express");
var app = express();

const server = app.listen(8000);
const io = require('socket.io')(server);
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var num = 0;
io.on('connection', function(socket){
    socket.on('count', function(data) {
        if(data.count === "reset"){
            num = 0;
            io.emit('alluser2', {count : num});
        }
        else{
            num += data.count;
            io.emit('alluser', {count : num});
        }
    })
});

app.get('/', function(req, res) {
    res.render("index");

})