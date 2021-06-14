$(document).ready(function(){
    $('.main-menu__slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 8,
        variableWidth: true,
        slidesToScroll: 4,
        prevArrow: '.fa-angle-left',
        nextArrow: '.fa-angle-right',
    });

    // banner slider
    $('.banner__slider-image').slick({
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.banner__slider__text',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // banner slider text
    $('.banner__slider__text').slick({
        dots: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        asNavFor: '.banner__slider-image'
    });


});