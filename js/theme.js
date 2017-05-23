(function ($) {
"use strict";

	$( window ).load(function() {        
        
    });

    $( document ).ready(function($){
      
        /* Navbar with left sidebar */
        var sideslider = $('[data-toggle=collapse-side]');
        var sel = sideslider.attr('data-target');
        var sel2 = sideslider.attr('data-target-2');
        sideslider.click(function(event) {
            $(sel).toggleClass('in');
            $(sel2).toggleClass('out');
            $('body').toggleClass('side-on side-off');
        });

        // $('.navbar-nav.nav-menu > li').on('mouseenter', function() {
        //     $(this).addClass('current');
        // });
        $(document).on({
            mouseenter: function () {
                var mouse_is_inside = true;
                // console.log('Enter');
                $(this).addClass('current');
            },

            mouseleave: function () {
                var mouse_is_inside = false;
                // console.log('Leave');
                $(this).removeClass('current');
            }
        }, '.navbar-nav.nav-menu > li');

        $(document).on('click', '.mega-dropdown', function(e) {
          e.stopPropagation()
        });

        var owl = $('.owl-carousel');
        owl.owlCarousel({
            navigation : true,
            // nav:true,
            addClassActive: true,
            transitionStyle : "fade",
            autoplay: false,
    		autoplayTimeout: 5000,
    		loop: true,
            slideSpeed : 500,
            paginationSpeed : 500,
            items : 1, 
            itemsDesktop : false,
            itemsDesktopSmall : false,
            itemsTablet: false,
            itemsMobile : false
        });
        // Custom Navigation Events
		$('.owl-next').click(function(){
		    owl.trigger('next.owl.carousel');
		});
		$('.owl-prev').click(function(){
		    owl.trigger('prev.owl.carousel');
		});
        // add animate.css class(es) to the elements to be animated
		function setAnimation ( _elem, _InOut ) {
			// Store all animationend event name in a string.
			// cf animate.css documentation
			var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

			_elem.each ( function () {
				var $elem = $(this);
				var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

				$elem.addClass($animationType).one(animationEndEvent, function () {
					$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
				});
			});
		}
        $('.owl-item.active .caption-wrapper h5, .owl-item.active .caption-wrapper h3, .owl-item.active .caption-wrapper .caption-footer, .owl-item.active .caption-wrapper .caption-details').addClass('animated');
		// Fired before current slide change
		owl.on('change.owl.carousel', function(event) {
			var $currentItem = $('.owl-item', owl).eq(event.item.index);
			var $elemsToanim = $currentItem.find("[data-animation-out]");
			setAnimation ($elemsToanim, 'out');
            $('.owl-item.active .caption-wrapper h5, .owl-item.active .caption-wrapper h3, .owl-item.active .caption-wrapper .caption-footer, .owl-item.active .caption-wrapper .caption-details').removeClass('animated');
		});
		// Fired after current slide has been changed
		owl.on('changed.owl.carousel', function(event) {
			var $currentItem = $('.owl-item', owl).eq(event.item.index);
			var $elemsToanim = $currentItem.find("[data-animation-in]");
			setAnimation ($elemsToanim, 'in');
		});
        var $firstAnimatingElems = owl.find('.owl-item.active').find("[data-animation-in]");
        owl.setAnimation($firstAnimatingElems, 'in');

        checkWindowSize();
        $(window).resize(checkWindowSize);
    });

    $('[data-mr-animation-delay]').css('animation-delay', function () {
        return $(this).data('mr-animation-delay')
    });

    AOS.init({
        duration: 1200,
    });

    function checkWindowSize() {
        if (window.matchMedia('(max-width: 767px)').matches) {
            console.log('Max width: 767px');
        }
        if (window.matchMedia('(min-width: 768px)').matches) {
            console.log('Min width: 768px');
        }
    }

}(jQuery)); 