$(document).ready(function(){

    $('.js-clients-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        dotsEach: 4,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        responsive:{
            0:{
                items: 1,
                slideBy: 1,
                dotsEach: 4
            },
            550:{
                items: 2,
                slideBy: 2
            },
            850:{
                items: 3,
                slideBy: 3
            },
            1100:{
                items: 4,
                slideBy: 4
            }
        }
    })



});
