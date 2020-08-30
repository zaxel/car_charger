$(document).ready(function(){
    $('.head_carousel1').slick({
        
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
        // adaptiveHeight: true
    });
    // page counter
    let $currentSlide = $('.current_slide');
    let $totalSlides = $('.total_slides');
    let $slickElement = $('.head_carousel1');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    let i = (currentSlide ? currentSlide : 0) + 1;
    $currentSlide.html('0'+i);
    $totalSlides.html('0'+slick.slideCount);
    });
  });
  
$(document).ready(function(){
    const top_nav_menu = document.querySelector('.top_nav_menu');
    const header_nav = document.querySelector('.header');
    const body = document.querySelector('body');
    const burger = document.querySelector('.burger');
    const burger_container = document.querySelector('.burger_container');
    $(burger_container).click(function(event){
        $(top_nav_menu).toggleClass('top_nav_menu_active');
        $(header_nav).toggleClass('header_nav_stick_tothe_top');
        $(burger).toggleClass('active_burger');
        $('body').toggleClass('lock');
        $('.header_nav').click(function(event){
            top_nav_menu.classList.remove('top_nav_menu_active');
            header_nav.classList.remove('header_nav_stick_tothe_top');
            burger.classList.remove('active_burger');
            body.classList.remove('lock');
        });
    });
});
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() != 0)
        $('#jumbBtn').fadeIn();
        else
        $('#jumbBtn').fadeOut();
    });
    $('#jumbBtn').click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});