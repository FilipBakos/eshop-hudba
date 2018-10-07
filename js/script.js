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
	
/*REGISTRATION, LOGIN*/
var $exit = $('.exit');
var $behind = $('.behind');
var $login = $('#login-button');
var $loginWrap = $('.login');
var $registrate = $('.registrate');
var $registrationWrap = $('.registration');
var $registrate = $('.registrate');

$login.on('click', function(event) {
	event.preventDefault();
	$behind.fadeTo("slow",0);
	$behind.addClass('invisible');

	$loginWrap.removeClass('invisible');
	$loginWrap.fadeTo("slow",1);
	
});

$registrate.on('click', function(event) {
	event.preventDefault();
	$loginWrap.fadeTo("slow",0);
	$loginWrap.addClass('invisible');

	$registrationWrap.removeClass('invisible');
	$registrationWrap.fadeTo("slow",1);
});

$exit.on('click', function(event) {
	event.preventDefault();
	$behind.removeClass('invisible');
	$behind.fadeTo("slow",1);

	if(!$loginWrap.hasClass('invisible')) {
		$loginWrap.fadeTo("slow",0);
		$loginWrap.addClass('invisible');
	}

	if(!$registrationWrap.hasClass('invisible')) {
		$registrationWrap.fadeTo("slow",0);
		$registrationWrap.addClass('invisible');
	}
	

});











