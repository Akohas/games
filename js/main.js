var $ = require('jquery'),
		owlCarousel = require('owl-carousel'),
		rating = require('./modules/rating.js');

$(document).ready(function(){
	rating();
	$('.slider').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		center: true,
		nav: true,
		navText: ['<svg><use xlink:href="#left-arrow"></use</svg>','<svg><use xlink:href="#right-arrow"></use</svg>'],
		dots: false,
		smartSpeed: 1000
	});

	$('.owl-loaded').addClass('owl-carousel');

});

