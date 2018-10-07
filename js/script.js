var $formSearch = $('.nav-bar li:nth-child(5)');
var $formSearchA = $('.nav-bar li:nth-child(5) a');
var $search = $('#search');
var $searchInput = $formSearch.find('input');

$formSearch
	.on('click', function(event) {
		event.preventDefault();

		if (!$search.hasClass('visible')) {

			$search.addClass('visible');
			$formSearch.addClass('selected lenghten');
			$formSearchA.addClass('transform-search');
			$('.ls').addClass('invisible');
			$searchInput.focus();


			if($('.basket').css('display') === 'none') {
				$('.basket').addClass('visible1');
			}
			
		}

	})
$searchInput
	.on('keydown', function(event) {
		if (event.keyCode == 27)
			$searchInput.blur();
	})
	.on('blur', function() {
		window.setTimeout(function() {
			$search.removeClass('visible');
			$formSearchA.removeClass('transform-search selected');
			$formSearch.removeClass('selected lenghten');
			$('.ls').removeClass('invisible');

			if($('.basket').hasClass('visible1')) {
				$('.basket').removeClass('visible1');
			}

		}, 100);
	});
	
var $login = $('#login-button');

$login.on('click', function(event) {
	event.preventDefault();
	$('.behind').fadeTo("slow",0);
	$('.behind').addClass('invisible');

	$('.login').removeClass('invisible');
	$('.login').fadeTo("slow",1);
	
});


var $exit = $('.exit');

$exit.on('click', function(event) {
	event.preventDefault();
	$('.behind').removeClass('invisible');
	$('.behind').fadeTo("slow",1);
	$('.login').fadeTo("slow",0);
	$('.login').addClass('invisible');

	
});





