window.addEventListener('DOMContentLoaded', function() {

	$(document).on('click', '#feedbackButton', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var params = {
			email: $(e.target).siblings('input').val(),
			text: $(e.target).siblings('textarea').val()
		};
		var form = $(e.target).parents('form');
		form.replaceWith('<div id="feedbackStatus"></div>')
		var request = new XMLHttpRequest()
		request.open('POST', 'https://outshape-production.onehundredten.co/api/feedback/')
		request.setRequestHeader('Content-type', 'application/json');
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				if (request.status == 200) {
					$('#feedbackStatus').html('Thank you for your feedback');
				} else {
					alert('There was an error submitting your feedback.');
					$('#feedbackStatus').replaceWith(form);
				}
			}
		}
		request.send(params)
	});


})
