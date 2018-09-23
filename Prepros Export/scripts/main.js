$(document).ready(() => {
	//Toggle burger menu
	$('#burgermenu').on('click', () => {
		$('nav ul').toggleClass('burgermobile');		
	});

	//Add to cart click
	$('.addcart').on('click', () => {
		$('.addcart').addClass('addedcart');
		$('.addcart p').text('Added'); 		
	});

	//Add to favorite click
	$('.favorites').on('click', () => {
		$('.favorites').toggleClass('addedfavorites');
		$('.favorites p').toggle().text('Add to Favorites'); 		
	});
}); 