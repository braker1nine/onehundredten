window.addEventListener('DOMContentLoaded', function() {

	var lightBox,
		lightBoxBackground;
	function showLightBox(src) {
		if (!lightBox) {
			lightBox = $('<div id="lightBox" class="modal"></div>');
			lightBoxBackground = $('<div id="lightBoxBackground" class="modalBackground">');

			
		}

		lightBox.on('click', hideLightBox);
		lightBoxBackground.on('click', hideLightBox);
		lightBox.empty().append('<img src="' + src + '"/>');

		$('body').append(lightBox);
		$('body').append(lightBoxBackground);

		setTimeout(function() {
			lightBox.addClass('show');
			lightBoxBackground.addClass('show');
		}, 10)
	}

	function hideLightBox() {
		lightBoxBackground.one('webkitTransitionEnd', function() {
			lightBoxBackground.remove();
			lightBox.remove();
		});
		lightBox.removeClass('show');
		lightBoxBackground.removeClass('show');
	}


	$(document).on('click', 'img.screen', function(e) {
		showLightBox(e.target.src);
	});


})