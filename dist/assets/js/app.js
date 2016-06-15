$(document).ready(function() {

    $(".js-scrollto").click(function () {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1700);
        return false;
    });

    $('.js-gallery').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
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

    var wow = new WOW({
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
    });
    wow.init();

});

$('.browsehappy').click(function() {
    $(this).slideUp();
});

$(document).ready(function(){

    $(".input__placeholder").click(function(){
        $(this).fadeOut(100);
        $(this).prev(".input__input").focus();
        $(this).prev().prev(".input__input").focus();
    });

    $(".input__input")
        .focus(function() {
            $(this).next(".input__placeholder").fadeOut(100);
            $(this).next().next(".input__placeholder").fadeOut(100);
        })
        .blur(function() {
            if ($(this).val().length == 0) {
                $(this).next(".input__placeholder").fadeIn(100);
                $(this).next().next(".input__placeholder").fadeIn(100);
            }
        });

})

$(document).ready(function(){
    $(".pop-info__trigger")
        .mouseenter(function(){
            $(this).addClass("on");
            $(this).next(".pop-info__box").fadeIn(500);
        })
        .mouseleave(function(){
            $(this).removeClass("on");
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

    $(".js-close-button").click(function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        return false;
    });

    // =============================================
    // form-calc
    // =============================================

    $('.js-popup-form-calc').click(function (){
        $.magnificPopup.open({
            items:{
                src:$('#form-calc')
            },
            type:'inline',
            midClick: true,
            removalDelay: 500,
            mainClass: 'mfp-zoom-in',
            overflowY: 'scroll',
            fixedContentPos: false,
            callbacks: {
                close: function() {
                    validatorFormCalc.resetForm();
                    $("#form-calc .empty-checkboxes").fadeOut(100);
                }
            }
        });
    });

    var validatorFormCalc = $("#form-calc").validate({
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
                yaCounter37875220.reachGoal("raschet");
            });
            return false;
        }
    });

    $("#form-calc input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-calc button").click(function (e) {
        $("#form-calc .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormCalc.resetForm();
        if ($('#form-calc .checkbox__checkbox:checked').size() > 0) {
            return true
        } else {
            $("#form-calc .empty-checkboxes").fadeIn(100);
            return false;
        };
    });

    $("#form-calc .checkbox__checkbox" ).change(function() {
        if ($('#form-calc .checkbox__checkbox:checked').size() < 1) {
            $("#form-calc .empty-checkboxes").fadeIn(100);
        } else {
            $("#form-calc .empty-checkboxes").fadeOut(100);
        }
    });

    // =============================================
    // form-order
    // =============================================

    $('.js-popup-form-order').click(function (){
        $.magnificPopup.open({
            items:{
                src:$('#form-order')
            },
            type:'inline',
            midClick: true,
            removalDelay: 500,
            mainClass: 'mfp-zoom-in',
            overflowY: 'scroll',
            fixedContentPos: false,
            callbacks: {
                close: function() {
                    validatorFormOrder.resetForm();
                    $("#form-order .empty-checkboxes").fadeOut(100);
                }
            }
        });
    });

    var validatorFormOrder = $("#form-order").validate({
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
                yaCounter37875220.reachGoal("1st");
            });
            return false;
        }
    });

    $("#form-order input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-order button").click(function (e) {
        $("#form-order .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormOrder.resetForm();
        if ($('#form-order .checkbox__checkbox:checked').size() > 0) {
            return true
        } else {
            $("#form-order .empty-checkboxes").fadeIn(100);
            return false;
        };
    });

    $("#form-order .checkbox__checkbox" ).change(function() {
        if ($('#form-order .checkbox__checkbox:checked').size() < 1) {
            $("#form-order .empty-checkboxes").fadeIn(100);
        } else {
            $("#form-order .empty-checkboxes").fadeOut(100);
        }
    });



    // =============================================
    // form-docs
    // =============================================

    $('.js-popup-form-docs').click(function (){
        $.magnificPopup.open({
            items:{
                src:$('#form-docs')
            },
            type:'inline',
            midClick: true,
            removalDelay: 500,
            mainClass: 'mfp-zoom-in',
            overflowY: 'scroll',
            fixedContentPos: false,
            callbacks: {
                close: function() {
                    validatorFormDocs.resetForm();
                    $("#form-docs .empty-checkboxes").fadeOut(100);
                }
            }
        });
    });

    var validatorFormDocs = $("#form-docs").validate({
        rules: {
            email: {required: true, email: true},
            phone: {required: true}
        },
        messages: {
            email: {required: "Это поле должно быть заполнено", email: "Неправильный формат Email"},
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
                        src:$('#popup-thankyou-docs')
                    },
                    type:'inline',
                    midClick: true,
                    removalDelay: 500,
                    mainClass: 'mfp-zoom-in',
                    overflowY: 'scroll',
                    fixedContentPos: false
                });
                yaCounter37875220.reachGoal("docs");
            });
            return false;
        }
    });

    $("#form-docs input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-docs button").click(function (e) {
        $("#form-docs .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormDocs.resetForm();
        return true;
    });

    // =============================================
    // form-ask
    // =============================================

    $('.js-popup-form-ask').click(function (){
        $.magnificPopup.open({
            items:{
                src:$('#form-ask')
            },
            type:'inline',
            midClick: true,
            removalDelay: 500,
            mainClass: 'mfp-zoom-in',
            overflowY: 'scroll',
            fixedContentPos: false,
            callbacks: {
                close: function() {
                    validatorFormAsk.resetForm();
                    $("#form-ask .empty-checkboxes").fadeOut(100);
                }
            }
        });
    });

    var validatorFormAsk = $("#form-ask").validate({
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
                yaCounter37875220.reachGoal("ask");
            });
            return false;
        }
    });

    $("#form-ask input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-ask button").click(function (e) {
        $("#form-ask .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormAsk.resetForm();
        return true;
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

    // =============================================
    // form-consult
    // =============================================

    var validatorFormConsult = $("#form-consult").validate({
        rules: {
            phone: {required: true}
        },
        messages: {
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
                yaCounter37875220.reachGoal("express");
            });
            return false;
        }
    });

    $("#form-consult input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-consult button").click(function (e) {
        $("#form-consult .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormConsult.resetForm();
        return true;
    });


});

$(document).ready(function(){

    // =============================================
    // form-offer
    // =============================================

    var validatorFormOffer = $("#form-offer").validate({
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
                yaCounter37875220.reachGoal("offer");
            });
            return false;
        }
    });

    $("#form-offer input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-offer button").click(function (e) {
        $("#form-offer .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormOffer.resetForm();
        return true;
    });

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

        optTabs.removeClass("active");
        optTab.addClass("active");

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

$(document).ready(function(){
    $(".s-team__more").click(function(e){
        e.preventDefault();
        $(this).parent(".s-team__item").toggleClass("expanded");
        return false;
    });


    $('.sky-carousel').carousel({
        itemWidth: 180,
        itemHeight: 180,
        distance: 38,
        startIndex: 3,
        selectedItemDistance: 60,
        selectedItemZoomFactor: 1,
        unselectedItemZoomFactor: 0.5,
        unselectedItemAlpha: 0.6,
        motionStartDistance: 210,
        topMargin: 0,
        gradientOverlayVisible: false,
        gradientOverlayColor: "#f4f4f4",
        selectByClick: true,
        autoSlideshow: false,
        autoSlideshowDelay: 6,
        loop: true,
        enableMouseWheel: false
    });


});
