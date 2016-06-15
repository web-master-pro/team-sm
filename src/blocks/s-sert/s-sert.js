$(document).ready(function(){
    $(".sert__point")
        .mouseenter(function(){
            $(this).next(".sert__text").toggleClass("active");
        })
        .mouseleave(function(){
            $(this).next(".sert__text").removeClass("active");
        });
    // $(".sert__text")
    //     .mouseenter(function(){
    //         $(this).toggleClass("active");
    //     })
    //     .mouseleave(function(){
    //         $(this).removeClass("active");
    //     });

    var items = $('.sert__text'),
        initialSlide = 0,
        timer = 0,
        timerDuration = 3000;

    function switchSlider(i) {
        items.removeClass('active');
        items.eq(i).addClass('active');
    };

    function sliderAuto() {
        var current = -1;

        var count = items.size() - 1;
        for (i = 0; i < count; i++) {
            if (items.eq(i).hasClass('active')) {
                current = i + 1;
            }
        }
        if (current < 0) {
            current = 0;
        }
        if (current > count) {
            current = 0;
        }
        switchSlider(current);
    }

    function startTimer(){
        timer = setInterval(sliderAuto, timerDuration);
    }

    function stopTimer(){
        clearInterval(timer);
    }

    switchSlider(initialSlide);
    startTimer();
    items
        .mouseenter(function(){
            items.removeClass("active");
            $(this).addClass("active");
            stopTimer();
        })
        .mouseleave(function(){
            items.removeClass("active");
            startTimer();
        });


});
