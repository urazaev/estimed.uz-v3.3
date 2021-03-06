var ContactForm = function () {

	return {

		//Contact Form
		initContactForm: function () {
			// Validation
			$("#sky-form3").validate({
				// Rules for form validation
				rules: {
					name: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 10
					},

					captcha: {
						required: true,
						remote: '/assets/plugins/sky-forms-pro/skyforms/captcha/process.php'
					},
					robot: {
						required: true
					}
				},

				// Messages for form validation
				messages: {
					name: {
						required: 'Enter your name',
					},
					email: {
						required: 'Enter email',
						email: 'Enter the correct email'
					},
					message: {
						required: 'Enter the message',
						minlength: 'Too short message'
					},
					captcha: {
						required: 'Enter characters',
						remote: 'Enter the correct characters'
					},
					robot: {
						required: 'We read letters only from people'
					}
				},

				// Ajax form submition                  
				submitHandler: function (form) {
					$(form).ajaxSubmit({
						beforeSend: function () {
							$('#sky-form3 button[type="submit"]').attr('disabled', true);
						},
						success: function () {
							$("#sky-form3").addClass('submited');
						}
					});
				},

				// Do not change code below
				errorPlacement: function (error, element) {
					error.insertBefore(element.parent());
				}
			});
		}

	};

}();