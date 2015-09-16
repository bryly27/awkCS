// require mongoose
var mongoose = require('mongoose');

// create our schema
var SubSchema = new mongoose.Schema({
	email: String,
	status: String, 
	created_at: Date
})

// turn the schema into a model
mongoose.model('Subscriber', SubSchema);