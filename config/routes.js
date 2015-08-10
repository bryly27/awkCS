var subs = require('../controllers/subs');

module.exports = function(app) {
	
	app.get("/", function(req, res) {
		// mongs.index(req, res);
		res.render("index");
	});

	app.post("/add", function(req, res){
		console.log(req.body);
		subs.add(req, res);
	});
	
}