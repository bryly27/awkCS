// require mongoose
var mongoose = require('mongoose');
// require fs for loading the model files
var fs = require('fs');
// require path for getting the models path
var path = require('path');
// connect to the db!
// mongoose.connect('mongodb://localhost/ebo');
var connect = function() {
	// specify options for when mongoose connects to mongodb
	var options = { server: { socketOptions: { keepAlive: 1}}}
	// connect to our mongodb database server with options specified above
	mongoose.connect('mongodb://localhost/awkyo');
}
// actually connect to the database!
connect();

// if there is an error while connecting lets console.log it
mongoose.connection.on('error', function(err) {
	console.log(err)
})

// if we get disconnected from mongoose try to connect again
mongoose.connection.on('disconnected', function() {
	connect();
})
// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');
// fancy function that reads all of the files from a specific location (models_path) and then does something (requires) for each of the js files in the location
fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') >= 0) {
		// require all of the js files -- remember that require RUNS the code even if there is no module.exports in the file
		require(models_path + '/' + file);
	}
})

