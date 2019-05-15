/**
 * My Realty - Custom Javascripts
 **/

(function ($) {
    // Fixed main menu on page scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('#header').addClass("navbar-fixed-top");
            $( ".search-btn-container" ).css({ 'position' : 'fixed' });
            $('.search-btn-container a.search-btn').addClass("mobile-search-fixed");
        }
        else{
            $('#header').removeClass("navbar-fixed-top");
            $( ".search-btn-container" ).css({ 'position' : 'absolute' });
            $('.search-btn-container a.search-btn').removeClass("mobile-search-fixed");
        }
    });

    // Bottom to top, Top to Bottom button with Click event
    scrollDuration = 700; // Duration of scrolling to top
    var docHeight = $(document).height();
    var offsetToTop = (15/100) * docHeight;
    var offsetToBottom = (85/100) * docHeight;
    $(window).scroll(function() {
        // Bottom to top
        if ($(this).scrollTop() > offsetToTop) {
            $('.scrollToTop').fadeIn(500);
        } else {
            $('.scrollToTop').fadeOut(500);
        }
        // Top to Bottom
        if ($(this).scrollTop() > offsetToBottom) {
            $('.scrollToBttom').fadeOut(500);
        } else {
            $('.scrollToBttom').fadeIn(500);
        }
    });
    $('.scrollToTop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, scrollDuration);
    });
    $('.scrollToBttom').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: docHeight}, scrollDuration);
    });

    $(document).ready(function() {

        // Initiate WOW for animate.css
        new WOW().init();

        // Initiate Bootstrap tooltip
        $('[data-toggle="tooltip"]').tooltip();

        // Detecting Mobile & Tab devices
        //if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

        //}

        // media query event handler
        if (matchMedia) {
            var mq = window.matchMedia("(max-width: 767px)");
            mq.addListener(WidthChange);
            WidthChange(mq);
        }
        // media query change
        function WidthChange(mq) {
            if (mq.matches) {
                //alert('max 767px');
                $("header .top-main-nav > ul.main-menu > li").removeClass('hvr-shutter-out-vertical');
            } else {
                //alert('min 768px');
                $("header .top-main-nav > ul.main-menu > li").addClass('hvr-shutter-out-vertical');
                // Fixes & effects on Main navigation dropdown
                $("#top-main-nav li.dropdown").hover(function(){
                    $( ".search-btn-container" ).css({ 'z-index' : '1000' });
                    $( "a.search-btn" ).css({ 'opacity' : '0', 'transition' : 'all .3s ease' });
                    //$('.dropdown-menu', this).stop(true, true).fadeIn("fast");
                    $(this).toggleClass('open');
                    }, function(){
                    $( ".search-btn-container" ).css({ 'z-index' : '2000' });
                    $( "a.search-btn" ).css({ 'opacity' : '1', 'transition' : 'all .5s ease' });
                    //$('.dropdown-menu', this).stop(true, true).fadeOut("fast");
                    $(this).toggleClass('open');
                });
            }
        }

        // Add slideDown animation to dropdown
        $('.dropdown').on('show.bs.dropdown', function(e){
          //$(this).find('.dropdown-menu').first().stop(true, true).css({ 'animation-name' : 'slideInLeft' });
          $('.dropdown-menu').toggleClass('mob-on mob-off');
        });
        // Add slideUp animation to dropdown
        $('.dropdown').on('hide.bs.dropdown', function(e){
          //$(this).find('.dropdown-menu').first().stop(true, true).css({ 'animation-name' : 'fadeOut' });
          $('.dropdown-menu').toggleClass('mob-off mob-on');
        });

        // Search button fixes
        $('.search-btn-container a.search-btn').click(function(event){
            $('.advanced-search').addClass('active');
        });
        $('.advanced-search .close').click(function(event){
            $('.advanced-search').removeClass('active');
        });

        // Accordion on Blog single page
        function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('fa-minus-circle fa-plus-circle');
        }
        $('#accordion').on('hidden.bs.collapse', toggleChevron);
        $('#accordion').on('shown.bs.collapse', toggleChevron);

        // Animated counter for numbers
        $("#newsletter .counter").countimator();

        // Social button on Main navigation
        $( "#btn-social" ).click(function() {
            $('.main-menu').toggleClass('nav-off nav-on');
            $('.socials-call').toggleClass('nav-on nav-off');
        });

        // Dropdown style on Advanced search option
        $('.selectpicker').selectpicker();

        // Price slider on Advanced search option
        $('.price-slider').slider();

        // Property slider swipe
        $("#home-slider").swiperight(function() {
            $("#home-slider").carousel('prev');
        });
        $("#home-slider").swipeleft(function() {
            $("#home-slider").carousel('next');
        });
        //Function to animate slider captions
      	function doAnimations( elems ) {
      		//Cache the animationend event in a variable
      		var animEndEv = 'webkitAnimationEnd animationend';
      		elems.each(function () {
      			var $this = $(this),
      				$animationType = $this.data('animation');
      			$this.addClass($animationType).one(animEndEv, function () {
      				$this.removeClass($animationType);
      			});
      		});
      	}
      	//Variables on page load
      	var $myCarousel = $('#home-slider'),
      		  $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
      	//Initialize carousel
      	$myCarousel.carousel();
      	//Animate captions in first slide on page load
      	doAnimations($firstAnimatingElems);
      	//Pause carousel
      	$myCarousel.carousel('pause');
      	//Other slides to be animated on carousel slide event
      	$myCarousel.on('slide.bs.carousel', function (e) {
        		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        		doAnimations($animatingElems);
      	});
        // Property slider effects on Homepage
        $("#home-slider .carousel-caption .btn").hover(function(){
            $('.carousel-inner > .item > img').animate({opacity: 0.8}, 500 );
            // $('#home-slider .carousel-inner .item').css({ "background" : "transparent" });
            }, function(){
            $('.carousel-inner > .item > img').animate({opacity: 1}, 500 );
            // $('#home-slider .carousel-inner .item').css({ "background" : "./assets/images/loader/25-1.gif" });
        });

        // Change properties view on Homepage
        $('#list').click(function(event){
            event.preventDefault();
            $('#latest-properties').addClass('list');
            $('#latest-properties .property-box').addClass('flipInX');
            $('#latest-properties .property-box').removeClass('flipInY');
            $('#latest-properties').removeClass('grid');
        });
        $('#grid').click(function(event){
            event.preventDefault();
            $('#latest-properties').removeClass('list');
            $('#latest-properties .property-box').removeClass('flipInX');
            $('#latest-properties').addClass('grid');
            $('#latest-properties .property-box').addClass('flipInY');
        });

        // Login modal on Blog single page
        $('#login-modal').on('shown.bs.modal', function () {
            $('#login-modal').focus()
        });

        $('#property-gallery li img').on('click',function(){
        		var src = $(this).attr('src');
        		var img = '<img src="' + src + '" class="img-responsive"/>';

        		//start of new code new code
        		var index = $(this).parent('li').index();

        		var html = '';
        		html += img;
            html += '<div class="close" data-dismiss="modal">&times;</div>';
        		html += '<div class="controls-container">';
        		html += '<a class="controls-lb next" href="'+ (index+2) + '"><i class="fa fa-chevron-right"></i></a>';
        		html += '<a class="controls-lb previous" href="' + (index) + '"><i class="fa fa-chevron-left"></i></a>';
        		html += '</div>';

        		$('#galleryModal').modal();
        		$('#galleryModal').on('shown.bs.modal', function(){
          			$('#galleryModal .modal-body').html(html);
          			//new code
          			$('a.controls-lb').trigger('click');
        		})
        		$('#galleryModal').on('hidden.bs.modal', function(){
        			   $('#galleryModal .modal-body').html('');
        		});
        });

    }); // end - document.ready

    $(document).on('click', 'a.controls-lb', function(){
      	var index = $(this).attr('href');
      	var src = $('ul.row li:nth-child('+ index +') img').attr('src');

      	$('.modal-body img').attr('src', src);

      	var newPrevIndex = parseInt(index) - 1;
      	var newNextIndex = parseInt(newPrevIndex) + 2;

      	if($(this).hasClass('previous')){
            $(this).attr('href', newPrevIndex);
            $('a.next').attr('href', newNextIndex);
      	} else{
            $(this).attr('href', newNextIndex);
            $('a.previous').attr('href', newPrevIndex);
      	}

      	var total = $('ul.row li').length + 1;
      	//hide next button
      	if(total === newNextIndex){
      		  $('a.next').hide();
      	}else{
      		  $('a.next').show()
      	}
      	//hide previous button
      	if(newPrevIndex === 0){
      		  $('a.previous').hide();
      	} else{
      		  $('a.previous').show()
      	}
      	return false;
    });

})(jQuery);
