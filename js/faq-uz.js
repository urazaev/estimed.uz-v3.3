var FaqForm = function () {

	return {

		//Faq Form
		initFaqForm: function () {
			// Validation
			$("#FaqForm").validate({
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
						required: 'Исмингизни киритинг',
					},
					email: {
						required: 'Э-почта манзилини киритинг',
						email: 'Э-почта манзилини киритинг'
					},
					message: {
						required: 'Хабарингизни киритинг',
						minlength: 'Хабарингизни киритинг'
					},
					captcha: {
						required: 'Введите символы',
						remote: 'Введите правильно символы'
					},

					robot: {
						required: 'Биз факат одамлардан хатларни окиймиз'
					}
				},

				// Ajax form submition                  
				submitHandler: function (form) {
					$(form).ajaxSubmit({
						beforeSend: function () {
							$('#FaqForm button[type="submit"]').attr('disabled', true);
						},
						success: function () {
							$("#FaqForm").addClass('submited');
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
