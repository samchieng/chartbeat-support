$(document).ready(function() {
	
	// Scroll Spy

	$('body').scrollspy({ target: '#menu-left' })


	// Smooth Scroll

	var $root = $('html, body');
	$('a').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top - 50
	    }, 500);
	    return false;
	});

});

