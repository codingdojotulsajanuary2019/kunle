const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname + "/public/dist/public")));

app.all("*", (req,res,next) => {
    console.log("catch all path");
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8888, function(){
    console.log("Listening on port 8888");
})