module.exports = function(){


	$('.game-item[stars]').each(function(){

		var thisRating = $(this).attr('stars');
		var star = $(this).find('.star-js');
		var activeStars = star.slice(0, thisRating);

		activeStars.addClass('active-star');

	});

	$('.game-item').on('click', function(evt){
		if( ($(evt.target).closest('.rating-js').length || $(evt.target).hasClass('rating-js')) ){
			evt.preventDefault();

			var star = $(this).find('.star-js');
			var clickStar = $(evt.target).parent().index() + 1;
			var activeStars = star.slice(0, clickStar);
			activeStars.addClass('active-star');	
		}
			$(evt).trigger('click');			
	});



	$('.star-js').hover(function(evt){

			var thisStar = $(evt.target).index();
			var stars = $(evt.target).parent().children();
			var activeStars = stars.slice(0, thisStar + 1);
			
				$(stars).removeClass('active-star');
				$(activeStars).addClass('active-star');


			
	});





}