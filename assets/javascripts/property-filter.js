(function ($) {
    $(document).ready(function() {
        // Property Filter
        var layout = 'grid', // Store the current layout as a variable
        $container = $('#latest-properties'), // Cache the MixItUp container
        $changeLayout = $('#ChangeLayout'); // Cache the changeLayout button
        // Instantiate MixItUp with some custom options:
        $container.mixItUp({
          animation: {
            animateChangeLayout: true, // Animate the positions of targets as the layout changes
            animateResizeTargets: true, // Animate the width/height of targets as the layout changes
            effects: 'fade rotateX(-40deg) translateZ(-100px)'
          },
          layout: {
            containerClass: 'grid' // Add the class 'list' to the container on load
          }
        });

        // MixItUp does not provide a default "change layout" button, so we need to make our own and bind it with a click handler:
        $changeLayout.on('click', function(){

          // If the current layout is a list, change to grid:
          if(layout == 'grid'){
            layout = 'list';
            $changeLayout.html('<span class="glyphicon glyphicon-th"></span>'); // Update the button text
            $container.mixItUp('changeLayout', {
              containerClass: layout // change the container class to "grid"
            });
          // Else if the current layout is a grid, change to list:
          } else {
            layout = 'grid';
            $changeLayout.html('<span class="glyphicon glyphicon-th-list"></span>'); // Update the button text
            $container.mixItUp('changeLayout', {
              containerClass: layout // Change the container class to 'list'
            });
          }
        });
    });
})(jQuery);
