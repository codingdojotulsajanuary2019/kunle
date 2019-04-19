const express = require('express');
const app = express();
var path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + "/public/dist/public")))

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.all("*", (req, res, next) => {
    console.log("catch all path");
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8200, function(){
    console.log("Listening on port 8200");
})