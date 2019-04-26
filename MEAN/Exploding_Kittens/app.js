const express = require('express');
const app = express();
var path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + "/public/dist/public")))

const server = app.listen(8200);
const io = require('socket.io')(server);

require('./cards')

var allPlayers = [];
var countReady = 0;

io.on('connection', function(socket) {
    
    socket.on('player', function(data){
        console.log("-".repeat(10));
        console.log(data);

        allPlayers.push({player: data.name, status: "new"});
        io.emit('allPlayers', {allUsers : allPlayers})
    })
    socket.on('status', data => {
        for(let x = 0; x < allPlayers.length; x++){
            if(allPlayers[x].player == data.name){
                allPlayers[x].status = "active";
                countReady ++;
            }
        }
        io.emit('allPlayers', {allUsers : allPlayers, playersReady : countReady})
    })

    socket.on('startGame', data => {
        module.exports =  allPlayers;
    })
})

app.get('/start', (req, res) => {

})


// require('./server/config/mongoose');
// require('./server/config/routes')(app);

app.all("*", (req, res, next) => {
    console.log("catch all path");
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

// app.listen(8200, function(){
//     console.log("Listening on port 8200");
// })