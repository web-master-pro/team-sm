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
