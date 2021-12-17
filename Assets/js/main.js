
!(function ($) {
    "use strict";
    var main_navbar = $(".navbar");
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            if (!main_navbar.hasClass('nav__scrolled')) {
                main_navbar.addClass('nav__scrolled');
            }
        } else if (document.documentElement.clientWidth > 992) {
            main_navbar.removeClass('nav__scrolled');
        }
    });

    var myFullpage = new fullpage('#fullpage', {
        licenseKey: null,
        verticalCentered: false,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [],
        showActiveTooltip: false,
    });

})(jQuery);