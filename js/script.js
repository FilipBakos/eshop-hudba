var $formSearch = $('.nav-bar li:nth-child(6)');
var $formSearchA = $('.nav-bar li:nth-child(6) a');
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
		}, 100);
	});
	


