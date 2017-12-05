var express = require('express');
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser');
var companyRoutes = require('./routes/companyRoutes');
var carsRoutes = require('./routes/carsRoutes');
var port = process.env.PORT || 5000;//for heroku, use this every time

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/company', companyRoutes);
app.use('/cars', carsRoutes);

app.listen(port, function () {
    console.log('up and running on port', port);
});
