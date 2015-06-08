Parse.initialize("Xlh1REGV1qIZjLwifpBfcRO8oi8THxWe2bP2cdgh", "v6kGYQhXdnEhYSNmOK2jto8exmQjimRbexxf4Vwy");

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
		Parse.Cloud.run('feedback', params, {
			success:function(err) {
				console.log(err);
				$('#feedbackStatus').html('Thank you for your feedback');
			},
			error: function(err) {
				console.log(err);
				alert('There was an error submitting your feedback.');
				$('#feedbackStatus').replaceWith(form);
			}
		})
	});


})
