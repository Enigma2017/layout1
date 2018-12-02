
$(function () {
// Вызов модального окна
    $('.green__menu_button').on('click', function(e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });


     // Form send
        $('[data-submit]').on('click', function(e){
            e.preventDefault();
            $(this).parent('form').submit();
        })
        $.validator.addMethod(
            "regex",
            function(value, element, regexp) {
                var re = new RegExp(regexp);
                return this.optional(element) || re.test(value);
            },
            "Please check your input."
        );
        function valEl(el){

            el.validate({
                rules:{
                    tel:{
                        required:true,
                        regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                    },
                    name:{
                        required:true
                    },
                    email:{
                        required:true,
                        email:true
                    }
                },
                messages:{
                    tel:{
                        required:'Поле обязательно для заполнения',
                        regex:'Телефон может содержать символы + - ()'
                    },
                    name:{
                        required:'Поле обязательно для заполнения',
                    },
                    email:{
                        required:'Поле обязательно для заполнения',
                        email:'Неверный формат E-mail'
                    }
                },
                submitHandler: function (form) {
                    $('#loader').fadeIn();
                    var $form = $(form);
                    var $formId = $(form).attr('id');

                    $.ajax({
                        type: 'POST',
                        url: $form.attr('action'),
                        data: $form.serialize(),
                    })
                        .always(function (response) {
                            $('.arcticmodal-close').click();
                            setTimeout(function (){
                                $('#loader').fadeOut();
                            },800);
                            setTimeout(function (){
                                $('#overlay').fadeIn();
                                $form.trigger('reset');
                            },1100);
                            $('#overlay').on('click', function(e) {
                                $('#overlay').fadeOut();
                            });
                        });
                            
                    return false;
                }
            })
        }


        $('.js-form').each(function() {
            valEl($(this));
        });
         });