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
