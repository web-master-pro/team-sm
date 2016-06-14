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
