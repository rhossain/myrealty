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

        $(document).on('click', '.mega-dropdown', function(e) {
          e.stopPropagation()
        });

        var owl = $('.owl-carousel');
        owl.owlCarousel({
            navigation : true,
            // nav:true,
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
		// Fired before current slide change
		owl.on('change.owl.carousel', function(event) {
			var $currentItem = $('.owl-item', owl).eq(event.item.index);
			var $elemsToanim = $currentItem.find("[data-animation-out]");
			setAnimation ($elemsToanim, 'out');
		});
		// Fired after current slide has been changed
		owl.on('changed.owl.carousel', function(event) {
			var $currentItem = $('.owl-item', owl).eq(event.item.index);
			var $elemsToanim = $currentItem.find("[data-animation-in]");
			setAnimation ($elemsToanim, 'in');
		});

        checkWindowSize();
        $(window).resize(checkWindowSize);
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