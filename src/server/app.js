/**
 * Created by ergou on 3/26/2017.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var cors = require('cors');
var port = 5000;

app.use(express.static('src/client'));

app.use(bodyParser.json());
// app.use(cors());                // enable ALL CORS requests

require("./service/customer.service")(app);

app.listen(port, function (err) {
    console.log('server is running on port 5000');
});