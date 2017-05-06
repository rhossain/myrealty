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