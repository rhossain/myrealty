(function ($) {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        lazyLoad:false,
        touchDrag:true,
        navText: ["<i class='fa fa-chevron-left'></i>",
                  "<i class='fa fa-chevron-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            500:{
                items:2,
                nav:true
            },
            700:{
                items:3,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    });
})(jQuery);
