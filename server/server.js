var express = require('express');
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser');
var carRoutes = require('./routes/carRoutes');
var port = process.env.PORT || 5000;//for heroku, use this every time

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/company', carRoutes);

app.listen(port, function () {
    console.log('up and running on port', port);
});
