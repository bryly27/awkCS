	$(document).ready(function(){

		$(".content").hide();

		$(".content").fadeIn(3000);

		//countdown
		$("#countdown").countdown("2015/09/01", function(results){
			$("#months").text(results.strftime("%m"));
			$("#days").text(results.strftime("%d"));
			$("#hours").text(results.strftime("%H"));
			$("#minutes").text(results.strftime("%M"));
			$("#seconds").text(results.strftime("%S"));
		});

		// add subscriber
		$("form").submit(function(){
			$.post("/add", $(this).serialize(), function(results){
				if(results.email){
					$("#signUp").hide();
					$("#signUp").html("<p>Thank you for subscribing</p>");
					$("#signUp").fadeIn(2000);
				}
			})
			return false;
		});

		//validate email
		$("#email").keyup(function(){
			var reg = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
			var value = $(this).val();
			if(value.match(reg)){
				$("#submit").attr("disabled", false);
			}else{
				$("#submit").attr("disabled", true);
			}	

		})



			// testing image slider
			// $(".adventures").backstretch([
			//       "./images2/adventures0.jpg"
			//     , "./images2/adventures1.jpg"
			//     , "./images2/adventures2.jpg"
			//     , "./images2/adventures3.jpg"
			//   ], {duration: 3000, fade: 750});

			// $(".gadgets").backstretch([
			// 			"./images2/gadgets0.jpg"
			// 			,"./images2/gadgets1.jpg"
			// 			,"./images2/gadgets2.jpg"
			// 			,"./images2/gadgets3.jpg"
			// 			,"./images2/gadgets4.jpg"
			// 			,"./images2/gadgets5.jpg"
			// 			,"./images2/gadgets6.jpg"
			// 			,"./images2/gadgets7.jpg"
			// 			,"./images2/gadgets8.jpg"
			// 	], {duration: 3000, fade: 750});

			// $(".lifestyles").backstretch([
			// 			"./images2/lifestyles0.jpg"
			// 			,"./images2/lifestyles1.jpg"
			// 			,"./images2/lifestyles2.jpg"
			// 			,"./images2/lifestyles3.jpg"
			// 			,"./images2/lifestyles4.jpg"
			// 			,"./images2/lifestyles5.jpg"
			// 	], {duration: 3000, fade: 750});

			// $(".photos").backstretch([
			// 		  "./images2/adventures0.jpg"
			// 	    , "./images2/adventures1.jpg"
			// 	    , "./images2/adventures2.jpg"
			// 	    , "./images2/adventures3.jpg"
			// 			, "./images2/lifestyles0.jpg"
			// 			, "./images2/gadgets0.jpg"
			// 			,"./images2/gadgets1.jpg"
			// 			,"./images2/gadgets2.jpg"
			// 			,"./images2/gadgets3.jpg"
			// 			,"./images2/gadgets4.jpg"
			// 			,"./images2/gadgets5.jpg"
			// 			,"./images2/gadgets6.jpg"
			// 			,"./images2/gadgets7.jpg"
			// 			,"./images2/gadgets8.jpg"
			// 			,"./images2/lifestyles1.jpg"
			// 			,"./images2/lifestyles2.jpg"
			// 			,"./images2/lifestyles3.jpg"
			// 			,"./images2/lifestyles4.jpg"
			// 			,"./images2/lifestyles5.jpg"
			// 	], {duration: 3000, fade: 750});
		
			
	});
