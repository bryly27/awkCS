var subs = require('../controllers/subs');

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		// mongs.index(req, res);
		res.render('index');
	});

	app.post('/add', function(req, res){
		subs.add(req, res);
	});

	app.get('/unsubscribe', function(req, res){
		res.render('unsubscribe');
	});

	app.post('/unsub', function(req, res){
		subs.unsub(req, res);
	});
	
}