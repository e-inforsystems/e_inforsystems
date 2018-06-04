jQuery(function($){
	
	$(document).ready(function() {
	
		jQuery('.counter-item').appear(function() {
			jQuery('.counter-number').countTo();
			jQuery(this).addClass('funcionando');
		});
		
		var $window = $(window),
		$body = $('body');		
		
		$window.scroll(function(){
			$('#site-header-menu').removeClass('toggled-on');
		});
		
		$('#site-header-menu').scroll(function() {
			 $('#site-header-menu').addClass('toggled-on');
		});
		
		// SCROLLTO THE TOP
		// Show or hide the sticky footer button
		$window.scroll(function() {
			if ($(this).scrollTop() > 200) {
				$('.to_top').fadeIn(200);
			}else{
				$('.to_top').fadeOut(200);
			}
		});		
			
		// Animate the scroll to top
		$('.to_top').click(function(event) {
			event.preventDefault();
		
			$('html, body').animate({scrollTop: 0}, 300);
		});
		/////////////
		
	});
	
	
	
	/* wow
	-------------------------------*/
	new WOW({ mobile: false }).init();
		
});
