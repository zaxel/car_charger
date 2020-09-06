$(document).ready(function(){
    // header carousel start
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
    // header carousel end

    //testimonials carousel start
    $('.carousel2').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        prevArrow: $('.prev_testimonials'),
        nextArrow: $('.next_testimonials')
        // adaptiveHeight: true
    });
    //testimonials carousel end
  });
  