// require mongoose and load the model that we are going to use
// var path = require('path');
var mongoose = require('mongoose');
var Sub = mongoose.model('Subscriber');




// create an object with methods that we are going to export for our routes file to use
var subs = {}

subs.add = function(req, res){

	console.log(req.body);
	var sub = new Sub(req.body);
	sub.save(function(err, results){
		if(err){
			console.log("error", err);
		}else{
			res.json(results);
		}
	})
}


module.exports = subs;





