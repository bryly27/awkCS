$('#result').hide();

	//validate email
	$('#email').keyup(function(){
		var reg = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		var value = $(this).val();
		if(value.match(reg)){
			$('#submit-btn').attr("disabled", false);
		}else{
			$('#submit-btn').attr("disabled", true);
		}	

	});

	$('form').submit(function(){
		$.post('/add', $(this).serialize(), function(results){
			$('form').hide();
			$('#result').fadeIn('slow');
		});
		return false;
	});
