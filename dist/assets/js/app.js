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
                volume: 0.3
            }
        ],
        volume: 0.5,
        path: "assets/sounds/",
        preload: true
    });

    $(".button, .consult-form__button").mouseenter(function(){
        ion.sound.play("beep",{volume: 0.3});
    });

    $(".opt__tab").mouseenter(function(){
        setTimeout(ion.sound.play("beep",{volume: 0.1}), 700)
    });

    $(".pop-info__trigger").mouseenter(function(){
        ion.sound.play("beep",{volume: 0.1});
    });

    $('.js-phone-field').mask('8 (999) 99-99-999');

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

$('.browsehappy').click(function() {
    $(this).slideUp();
});

$(document).ready(function(){

    $(".input__placeholder").click(function(){
        $(this).fadeOut(100);
        $(this).prev(".input__input").focus();
    });

    $(".input__input")
        .focus(function() {
            $(this).next(".input__placeholder").fadeOut(100);
        })
        .blur(function() {
            if ($(this).val().length == 0) {
                $(this).next(".input__placeholder").fadeIn(100);
            }
        });

})

$(document).ready(function(){
    $(".pop-info__trigger")
        .mouseenter(function(){
            $(this).next(".pop-info__box").fadeIn(500);
        })
        .mouseleave(function(){
            $(this).next(".pop-info__box").fadeOut(500);
        })
})

$(document).ready(function(){

    $('.js-popup').magnificPopup({
        type:'inline',
        midClick: true,
        removalDelay: 500,
        mainClass: 'mfp-zoom-in',
        overflowY: 'scroll'
    });

    $('.js-order-button').click(function (){
        $.magnificPopup.open({
            items:{
                src:$('#form-order')
                // src:$('#popup-thankyou')
            },
            type:'inline',
            midClick: true,
            removalDelay: 500,
            mainClass: 'mfp-zoom-in',
            overflowY: 'scroll',
            fixedContentPos: false,
            callbacks: {
                close: function() {
                    validator.resetForm();
                }
            }
        });
    });

    var validator = $("#form-order").validate({
        rules: {
            name: {required: true},
            phone: {required: true}
        },
        messages: {
            name: {required: "Это поле должно быть заполнено"},
            phone: {required: "Это поле должно быть заполнено"}
        },
        focusInvalid: false,
        errorClass: "invalid-field",
        submitHandler: function(form) {
            form.preventDefault;
            $.ajax({
                type: "POST",
                url: $(form).attr("action"),
                data: $(form).serialize()
            }).done(function() {
                $.magnificPopup.open({
                    items:{
                        src:$('#popup-thankyou')
                    },
                    type:'inline',
                    midClick: true,
                    removalDelay: 500,
                    mainClass: 'mfp-zoom-in',
                    overflowY: 'scroll',
                    fixedContentPos: false
                });
                // yaCounter36986630.reachGoal("zaiavka");
            });
            return false;
        }
    });

    $("#form-order input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-order button").click(function (e) {
        $("#form-order .invalid-field").removeClass("hidden").css({"display":""});
        validator.resetForm();
        return true;
    });

    $(".js-close-button").click(function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        return false;
    });

});

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

$(document).ready(function(){

    function expandPage() {
        $(".opt__pages").addClass("expanded");

        var h = $(".opt-page.active .opt-page__in").height();
        if ($(window).width() > 479) {
            $(".opt__pages").animate({height: h + 90}, 500);
        } else {
            var h_img = $(".opt-page.active .opt-page__right").height();
            $(".opt__pages").animate({height: h + h_img + 90}, 500);
        };
        $(".opt-page__left").css({height: h});
    };

    function collapsePage() {
        $(".opt__pages").removeClass("expanded");
        $(".opt__pages").animate({height: 400}, 500);
        if ($(window).width() > 479) {
            $(".opt-page__left").animate({height: 310},500);
        };
    };

    $(".opt__btn-more").click(function(){
        if ($(this).hasClass("on")) {
            collapsePage();
            setTimeout(function(){
               $(".opt__btn-more").removeClass("on");
            }, 500);
        } else {
            expandPage();

            setTimeout(function(){
               $(".opt__btn-more").addClass("on");
            }, 500);
        };
    });

    function activatePage(index) {

    };

    var optTabs = $(".opt__tab"),
        optPages = $(".opt-page");

    $(".opt__tab-box").click(function(e){
        e.preventDefault();
        var optTab = $(this).parent(),
            tabIndex = optTabs.index(optTab);

        optPages.removeClass("active");
        optPages.eq(tabIndex).addClass("active");
        if ($(".opt__pages").hasClass("expanded")) {
            expandPage();
        };

        if ($(window).width() < 1101) {
            destination = $(".opt__pages").offset().top - 20;
            $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
        };
        return false;
    });




})
