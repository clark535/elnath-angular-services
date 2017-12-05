var express = require('express');
//var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 5000;//for heroku, use this every time

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.static('server/public'));


app.listen(port, function () {
    console.log('up and running on port', port);
});
