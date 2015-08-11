var mongoose = require('mongoose');
var Sub = mongoose.model('Subscriber');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '',
        pass: ''
    }
});


// create an object with methods that we are going to export for our routes file to use
var subs = {}

subs.add = function(req, res){

	Sub.findOne({email: req.body.email}, function(err, results){
		if(err){
			console.log('error', err);
		}else{
			console.log('results', results);
			if(results === null){
				var mailOptions = {
			    from: 'Awkyo <awkyo.noreply@gmail.com>', // sender address 
			    to: req.body.email, // list of receivers 
			    subject: 'Thanks for Subscribing to Awkyo', // Subject line 
			    html: '<p><strong>Welcome to Awkyo!</strong></p><p>Thank you for subscribing. We will keep you informed with new updates.</p><hr><p>If you did not subscribe, or would like to unsubscribe, please visit <a href="http://www.awkyo.com/unsubscribe">http://www.awkyo.com/unsubscribe</a></p>' // html body 
				};

				transporter.sendMail(mailOptions, function(error, info){
			    if(error){
			        return console.log(error);
			    }
			    console.log('Message sent: ' + info.response);
				});

				var sub = new Sub(req.body);
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

}, 

subs.unsub = function(req, res){
	Sub.remove({email: req.body.email}, function(err, results){
		if(err){
			console.log('error', err);
		}else{
			res.json({success: true});
		}
	});
}


module.exports = subs;





