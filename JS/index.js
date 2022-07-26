$(document).ready(function() {
	$('#Hamburger').on('click', function(event) {
		event.preventDefault();
		$('.header-in').toggleClass('active');
	});

});