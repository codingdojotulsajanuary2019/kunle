var express = require("express");
var bodyParser = require('body-parser');
var app = express();

const server = app.listen(8000);
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

io.on('connection', function(socket) {
    socket.on('survey', function(data){
        console.log("-".repeat(10));
        console.log(data);
        let luckynum = Math.floor(Math.random() * 1000);
        socket.emit('updated_message', {
            message : `You emitted the following information to the server: { NAME: '${data.name}', LOCATION: '${data.location}', LANGUAGE: '${data.language}', COMMENT: '${data.comment}'}`,
            number : `Your lucky number emitted by the server is '${luckynum}'`
        })
    })
})

app.get('/', function(req, res) {
    res.render("index");
})
