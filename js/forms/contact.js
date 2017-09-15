var ContactForm = function () {

    return {
        
        //Contact Form
        initContactForm: function () {
	        // Validation
	        $("#sky-form3").validate({
	            // Rules for form validation
	            rules:
	            {
	                name:
	                {
	                    required: true
	                },
	                email:
	                {
	                    required: true,
	                    email: true
	                },
	                message:
	                {
	                    required: true,
	                    minlength: 10
	                },
	                captcha:
	                {
	                    required: true,
	                    remote: 'assets/plugins/sky-forms/version-2.0.1/captcha/process.php'
	                }
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                name:
	                {
	                    required: 'Введите ваше имя',
	                },
	                email:
	                {
	                    required: 'Введите email',
	                    email: 'Введите корректный email'
	                },
	                message:
	                {
	                    required: 'Введите сообщение'
	                },
	                captcha:
	                {
	                    required: 'Please enter characters',
	                    remote: 'Correct captcha is required'
	                }
	            },
	                                
	            // Ajax form submition                  
	            submitHandler: function(form)
	            {
	                $(form).ajaxSubmit(
	                {
	                    beforeSend: function()
	                    {
	                        $('#sky-form3 button[type="submit"]').attr('disabled', true);
	                    },
	                    success: function()
	                    {
	                        $("#sky-form3").addClass('submited');
	                    }
	                });
	            },
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertBefore(element.parent());
	            }
	        });
				
				// Validation
				$("#sky-form").validate(
				{					
					// Rules for form validation
					rules:
					{
						name:
						{
							required: true
						},
						email:
						{
							required: true,
							email: true
						},
						phone:
						{
							required: true
						},

						company:
						{
							required: true
						},


					},
										
					// Messages for form validation
					messages:
					{
						name:
						{
							required: 'Введите ваше имя'
						},
						email:
						{
							required: 'Введите email адрес',
							email: 'Введите правильный email адрес'
						},
						phone:
						{
							required: 'Введите контактный телефон'
						},
						company:
						{
							required: 'Введите название компании'
						}
					},

					// Ajax form submition
					submitHandler: function(form)
					{
						$(form).ajaxSubmit(
						{
							
							success: function()
							{
								$("#sky-form").addClass('submited');
								$('#sky-form button[type="submit"]').removeClass('button-uploading').attr('disabled', false);
							}
						});
					},	
					
					// Do not change code below
					errorPlacement: function(error, element)
					{
						error.insertAfter(element.parent());
					}
				});
		

            
            
            
        }

    };
    
}();