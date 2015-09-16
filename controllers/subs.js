var mongoose = require('mongoose');
var Sub = mongoose.model('Subscriber');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'team@awkyo.com',
        pass: 'awkyocool1!'
    }
});


// create an object with methods that we are going to export for our routes file to use
var subs = {}

subs.add = function(req, res){

	function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
	}


	if(validateEmail(req.body.email) === true){

		Sub.findOne({email: req.body.email}, function(err, results){
			if(err){
				console.log('error', err);
			}else{
				console.log('results', results);
				if(results === null){
					var mailOptions = {
				    from: 'Awkyo <noreply@awkyo.com>',
				    to: req.body.email, // list of receivers 
				    subject: 'Welcome to Awkyo!', // Subject line 
				    html: '<p>Thank you for your interest in Awkyo. We will continue to keep you informed with new updates. Please help us out by filling out this short survey.</p><br><a href="http://www.instant.ly/s/rjFCF/nav#p/186a0">http://www.instant.ly/s/rjFCF/nav#p/186a0</a><br><br><p>Thanks!</p><br><br><p>-Awkyo Team</p><hr><p>If you did not subscribe, or would like to unsubscribe, please visit <a href="http://www.awkyo.com/unsubscribe">http://www.awkyo.com/unsubscribe</a></p>' // html body 
					};

					transporter.sendMail(mailOptions, function(error, info){
				    if(error){
				        return console.log(error);
				    }
				    console.log('Message sent: ' + info.response);
					});

					var sub = new Sub({email: req.body.email, status: 'active', created_at: Date.now()});
					sub.save(function(err, results){
						if(err){
							console.log("error", err);
						}else{
							res.json({success: true});
						}
					})
					
				}else{
					res.json({success: false});
				}
			}
		});
	}else{
		res.json({success: false});
	}

}, 

subs.unsub = function(req, res){
	Sub.update({email: req.body.email}, {$set:{status: 'inactive'}}, function(err, results){
		if(err){
			console.log('error', err);
		}else{
			res.json({success: true});
		}
	});
}


module.exports = subs;





