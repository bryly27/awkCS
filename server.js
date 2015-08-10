// // require path
var path = require('path');
// // require express and create the express app
var express = require('express');
var app = express();

// // require bodyParser for handling post data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// // static content
app.use(express.static(path.join(__dirname, './static')));

// // setting up views folder and ejs
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



// // require the mongoose config file that connects to the db and loads all of the models
require('./config/mongoose');
// // require the routes file and pass it the express app
require('./config/routes')(app);

// listen
app.listen(8001, function() {
	console.log("listening on port 8001");
})