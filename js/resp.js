

var RespForm = function () {

    return {
        
        //Faq Form
        initRespForm: function () {
	        // Validation
	        $("#RespForm").validate({
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

                    captcha: {
                        required: true,
                        remote: '/assets/plugins/sky-forms-pro/skyforms/captcha/process.php'
                    },
                    robot: {
                        required: true
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
	                    required: 'Введите сообщение',
	                    minlength: 'Слишком короткое сообщение'
	                },
                    captcha: {
                        required: 'Введите символы',
                        remote: 'Введите правильно символы'
                    },

                    robot: {
                        required: 'Читаем письма только от людей'
                    }
	            },
	                                
	            // Ajax form submition                  
	            submitHandler: function(form)
	            {
	                $(form).ajaxSubmit(
	                {
	                    beforeSend: function()
	                    {
	                        $('#RespForm button[type="submit"]').attr('disabled', true);
	                    },
	                    success: function()
	                    {
	                        $("#RespForm").addClass('submited');
	                    }
	                });
	            },
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertBefore(element.parent());
	            }
	        });
        }

    };
    
}();