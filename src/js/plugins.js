// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

//= ../libs/magnific-popup/jquery.magnific-popup.js
//= ../libs/ion.sound/ion.sound.js
//= ../libs/owl.carousel/owl.carousel.js
//= ../libs/sky-carousel/jquery.sky.carousel-1.0.2.min.js
//= ../libs/jquery.maskedinput/jquery.maskedinput.js
//= ../libs/jquery-validation/jquery.validate.js
//= ../libs/device.js/device.js
//= ../libs/wow/wow.js
//= ../libs/smoothscroll/smoothscroll.js
