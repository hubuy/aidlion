(function($) {
    "use strict";

    // STICKY ACTIVE
    var activeSticky = $('#active-sticky'),
        winD = $(window);
    winD.on('scroll', function() {
        var scroll = $(window).scrollTop(),
            isSticky = activeSticky;
        if (scroll < 1) {
            isSticky.removeClass("is-sticky");
        } else {
            isSticky.addClass("is-sticky");
        }
    });


    // Window Load function
    jQuery(window).on('load', function() {
        // Preloader
        var preeLoad = $('#fadeout');
        preeLoad.fadeOut(1000);
    });



})(jQuery);