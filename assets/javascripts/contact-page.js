(function ($) {
    //"use strict";

    $(document).ready(function(){

		// Google Maps
		//-----------------------------------------------
		if ($("#map-canvas").length>0) {

			var map, myLatlng, myZoom, marker;
			// Set the coordinates of your location
			myLatlng = new google.maps.LatLng(40.7133332, -74.012347);
			myZoom = 12;
			function initialize() {
				var mapOptions = {
					zoom: myZoom,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					center: myLatlng,
					scrollwheel: false
				};
				map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
                marker = new MarkerWithLabel({
                    map: map,
                    draggable: true,
                    animation: google.maps.Animation.DROP,
					position: myLatlng,
                    labelContent: "<img width='64' height='64' src='./assets/images/logo-icon.png'>",
                    labelAnchor: new google.maps.Point(22, 0),
                    labelClass: "labels-map", // the CSS class for the label
                    labelStyle: {opacity: 0}
                });
				google.maps.event.addDomListener(window, "resize", function() {
					map.setCenter(myLatlng);
				});
			}
			google.maps.event.addDomListener(window, "load", initialize);

		}

	}); // End document ready
})(jQuery);
