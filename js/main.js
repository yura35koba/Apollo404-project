// Скрипт для показа и скрытия выпадающего меню на смартфонах
// Создаем переменые для кнопки и для меню
$(document).ready(function() {
    var pull = $('#navigation_toggle');
    var menu = $('.navigation ul');

    // Описываем событие при нажатии на кнопку
    $(pull).on("click", function(e){

        // Отменяем стандартное поведение ссылки в браузере
        e.preventDefault();

        // Открываем/Скрываем меню
        menu.slideToggle();

        // Добавляем модификатор --active
        $(this).toggleClass ('navigation__button__active');

    });

    $(window).resize(function(){
        var w = $(window).width();
        if (w > 992) {
            menu.removeAttr('style');
        }
    });
// функция для закрывавние меня при клике для экрана меньше 992px
    var wind = $(window).width();
        if (wind < 992) {
            $('nav.navigation a').on("click", function () {
                menu.slideToggle();
            });
        }
//................/..../..конец функции
//карусель(слайдер)
    $('#owl-example').owlCarousel({
        singleItem: true,
        navigation: true,
        theme: 'top-slider-theme',
        navigationText: ['', ''],//удаляем текст кнопок
        slideSpeed: 700
    });
    //................
    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector:"nav a"
    });
});