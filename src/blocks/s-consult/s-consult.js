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
