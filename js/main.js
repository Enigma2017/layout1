$(function () {
    $('.menu-open').click(function () {
        $('.menu-collapse').toggleClass('d-none');
        $('.menu-collapse').toggleClass('opened');
    }); 

     $('a.green__button').click( function(){ // ловим клик по ссылке с классом 
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    }); 
     

 $('.comment-slider').slick({
        // settings
        arrows:true,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        dots: true
    });
});
