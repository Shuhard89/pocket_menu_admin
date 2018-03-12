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
	$('.message .close').on('click', function() {
		$(this).closest('.message').transition('fade');
	});

	// Mobile menu
	function mobileMenu(){
		var $burger = $('.mobile-burger'),
			$menu = $('.profile-sidebar');

		// Events
		$burger.click(function() {
			if ( $(this).hasClass('opened') ){
				$burger.removeClass('opened');
				$menu.removeClass('visible');
				$('.profile-content-wrapper').dimmer({ closable: false }).dimmer('hide');
			} else {
				$burger.addClass('opened');
				$menu.addClass('visible');
				$('.profile-content-wrapper').dimmer({ closable: false }).dimmer('show');
			}
		});

		$menu.on('swipeleft', function() {
			$burger.removeClass('opened');
			$menu.removeClass('visible');
			$('.profile-content-wrapper').dimmer({ closable: false }).dimmer('hide');
		});
	}

	mobileMenu();
});
