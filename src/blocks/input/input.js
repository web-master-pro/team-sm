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
