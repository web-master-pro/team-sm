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
