const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8000, function(){
    console.log("Listening on port 8000");
})