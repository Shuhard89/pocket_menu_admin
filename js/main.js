$(document).ready(function() {
	// Fix object fit
	objectFitImages();
	
	// Semantic UI js
	$('.ui.dropdown').dropdown();
	$('.ui.checkbox').checkbox();
	$('.ui.modal').modal();
	$('.has-popup').popup({
		hoverable: true,
		offset: -12,
		inline: true
	});
});
