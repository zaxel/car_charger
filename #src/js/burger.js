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