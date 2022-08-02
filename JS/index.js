$(document).ready(function() {
	$('#Hamburger').on('click', function(e) {
		e.preventDefault();
		$('.header-in').toggleClass('active');
		$('.header-top-in').toggleClass('battle');
	});
	
	$('.header-top-in').on('click', function() {
		$('.header-top-in').removeClass('battle');
		$('.header-in').removeClass('active');
	});

	

});

