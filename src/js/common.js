$(document).ready(function() {

    $(".js-scrollto").click(function () {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1700);
        return false;
    });

    ion.sound({
        sounds: [
            {
                name: "beep",
                volume: 0.1
            }
        ],
        volume: 0.1,
        path: "assets/sounds/",
        preload: true
    });

    $(".button, .consult-form__button").mouseenter(function(){
        ion.sound.play("beep",{volume: 0.1});
    });

    // $(".opt__tab").mouseenter(function(){
    //     setTimeout(ion.sound.play("beep",{volume: 0.1}), 700)
    // });

    // $(".pop-info__trigger").mouseenter(function(){
    //     ion.sound.play("beep",{volume: 0.1});
    // });

    $('.js-phone-field').mask('+7 (999) 99-99-999');

    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $('html').addClass('safari');
    };

    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        $("html").addClass("macos");
    } else {
        $("html").addClass("pc");
    };

    if (navigator.userAgent.search("MSIE") >= 0) {
        $('html').addClass('ie');
    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
