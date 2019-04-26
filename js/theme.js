(function ($) {
"use strict";

	$( window ).load(function() {        
        // $('*').removeClass('aos-animate');
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

        $('.btn-toggle').click(function(){
            $(this).toggleClass('open');
        });

        // Initialize bootstrap tooltip
        $('[data-toggle="tooltip"]').tooltip()

        var owl = $('#homeTopSlider');
        owl.owlCarousel({
            navigation : true,
            // nav:true,
            dotsContainer: '#homeSliderNavs',
            addClassActive: true,
            // transitionStyle : "fade",
            animateOut: 'slideOutDown',
            animateIn: 'fadeIn',
            smartSpeed: 1000,
            autoplay: false,
    		// autoplayTimeout: 5000,
    		loop: true,
            // slideSpeed : 500,
            // paginationSpeed : 500,
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

        // function testAnim(x) {
        //     $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
        // };
        // $('#myModal').on('show.bs.modal', function (e) {
        //   // var anim = $('#entrance').val();
        //   var anim = 'zoomInDown';
        //       testAnim(anim);
        // });
        // $('#myModal').on('hide.bs.modal', function (e) {
        //   // var anim = $('#exit').val();
        //   var anim = 'zoomOutDown';
        //       testAnim(anim);
        // });

		$('#navFeaturedProperties').owlCarousel({
		    loop:true,
		    margin:10,
            items : 1,
            dots:false,
            nav:true,
            navText: ["<i class='fa fa-lg fa-arrow-left' aria-hidden='true'></i>","<i class='fa fa-lg fa-arrow-right' aria-hidden='true'></i>"],
		    // responsiveClass:true,
		    responsive:{
		        0:{
		            items:1
                },
		        768:{
		            items:2
		        },
		        992:{
		            items:3,
		            loop:false
		        }
		    }
        });
        
        $('#agent-carousel').owlCarousel({
            loop:true,
            margin:10,
            responsiveClass:true,
            navText: ["<i class='fa fa-caret-left' aria-hidden='true'></i>","<i class='fa fa-caret-right' aria-hidden='true'></i>"],
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                440:{
                    items:2,
                    nav:true
                },
                650:{
                    items:3,
                    nav:true
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:false
                }
            }
        });

        // Switching between Login & Regiser form
        function showRegisterForm(){
            $('#loginBox').fadeOut('fast',function(){
                $('#registerBox').fadeIn('fast');
                $('.sign-up-txt').fadeOut('fast',function(){
                    $('.login-txt').fadeIn('fast');
                });
                $('.modal-title').html('Register');
            }); 
            $('.error').removeClass('alert alert-danger').html('');
               
        }
        function showLoginForm(){
            $('#registerBox').fadeOut('fast',function(){
                $('#loginBox').fadeIn('fast');
                $('.login-txt').fadeOut('fast',function(){
                    $('.sign-up-txt').fadeIn('fast');    
                });                
                $('.modal-title').html('Login');
            });       
            $('.error').removeClass('alert alert-danger').html(''); 
        }
        $('#showRegisterForm, #linkRegister').on('click', showRegisterForm);
        $('#showLoginForm, #linkLogin').on('click', showLoginForm);

        // Bootstrap modal with animation
        $('.modal').on('show.bs.modal', function (e) {
            console.log('show modal');
            $('body').addClass('pr-0');
            $('.modal .modal-dialog').attr('class', 'modal-dialog  zoomIn  animated');
        });
        $('.modal').on('hide.bs.modal', function (e) {
            console.log('hide modal');
            $('.modal .modal-dialog').attr('class', 'modal-dialog  zoomOut  animated');
        });

        $('.selectpicker').selectpicker({
            style: 'btn-default',
            size: 4
        });

        $(document).on('click', '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox({
                alwaysShowClose: true,
                leftArrow: '<span><i class="fas fa-long-arrow-alt-left"></i></span>',
                rightArrow: '<span><i class="fas fa-long-arrow-alt-right"></i></span>'
            });
        });

        // Autocomplete for search field
        var optionsLocation = {
            data: ["blue", "green", "pink", "red", "yellow"],
            list: {
                maxNumberOfElements: 10,
                match: {
                    enabled: true
                },
                sort: {
                    enabled: true
                },
                showAnimation: {
                    type: "fade", //normal|slide|fade
                    time: 400,
                    callback: function() {}
                },
                hideAnimation: {
                    type: "slide", //normal|slide|fade
                    time: 400,
                    callback: function() {}
                }
            }
        };
        $("#listLocation").easyAutocomplete(optionsLocation);
        $("#listLocationSale").easyAutocomplete(optionsLocation);
        $("#listLocationRent").easyAutocomplete(optionsLocation);

        // Range slider
        $("#priceSlider, #areaSlider, #bedSlider, #bathSlider, #priceSliderSale, #areaSliderSale, #bedSliderSale, #bathSliderSale, #priceSliderRent, #areaSliderRent, #bedSliderRent, #bathSliderRent").slider();
        $("#priceSlider").on("slide", function(slideEvt) {
            $("#priceValue").text(slideEvt.value);
        });
        $("#areaSlider").on("slide", function(slideEvt) {
            $("#areaValue").text(slideEvt.value);
        });
        $("#bedSlider").on("slide", function(slideEvt) {
            $("#bedValue").text(slideEvt.value);
        });
        $("#bathSlider").on("slide", function(slideEvt) {
            $("#bathValue").text(slideEvt.value);
        });
        $("#priceSliderSale").on("slide", function(slideEvt) {
            $("#priceValueSale").text(slideEvt.value);
        });
        $("#areaSliderSale").on("slide", function(slideEvt) {
            $("#areaValueSale").text(slideEvt.value);
        });
        $("#bedSliderSale").on("slide", function(slideEvt) {
            $("#bedValueSale").text(slideEvt.value);
        });
        $("#bathSliderSale").on("slide", function(slideEvt) {
            $("#bathValueSale").text(slideEvt.value);
        });
        $("#priceSliderRent").on("slide", function(slideEvt) {
            $("#priceValueRent").text(slideEvt.value);
        });
        $("#areaSliderRent").on("slide", function(slideEvt) {
            $("#areaValueRent").text(slideEvt.value);
        });
        $("#bedSliderRent").on("slide", function(slideEvt) {
            $("#bedValueRent").text(slideEvt.value);
        });
        $("#bathSliderRent").on("slide", function(slideEvt) {
            $("#bathValueRent").text(slideEvt.value);
        });
        $('.btn-group > .slider').on("click", function() {
            var newvalue = $('.tooltip-inner').text();
            $("#priceValue").text(newvalue);
            $("#areaValue").text(newvalue);
            $("#bedValue").text(newvalue);
            $("#bathValue").text(newvalue);
            $("#priceValueSale").text(newvalue);
            $("#areaValueSale").text(newvalue);
            $("#bedValueSale").text(newvalue);
            $("#bathValueSale").text(newvalue);
            $("#priceValueRent").text(newvalue);
            $("#areaValueRent").text(newvalue);
            $("#bedValueRent").text(newvalue);
            $("#bathValueRent").text(newvalue);
        });
        function rangeSliderWidth() {
            var rangeSliderWidth = $('.range-slider').width();
            $('.slider.slider-horizontal').width(rangeSliderWidth);
            console.log(rangeSliderWidth);
        }
        rangeSliderWidth();
        $(window).resize(function(){
            rangeSliderWidth();
        });

        // Change properties view on Homepage
        $('#grid').addClass('state-disable');
        // $('#grid').css({'opacity' : '0.5', 'user-select' : 'none', 'cursor' : 'not-allowed'});
        $('#list').click(function(event){
            event.preventDefault();
            $('#list').addClass('state-disable');
            $('#list').removeClass('state-enable');
            // $('#list').css({'opacity' : '0.5', 'user-select' : 'none', 'cursor' : 'not-allowed'});
            $('#grid').addClass('state-enable');
            $('#grid').removeClass('state-disable');
            // $('#grid').css({'opacity' : '1', 'user-select' : 'initial', 'cursor' : 'pointer'});
            $('#latest-properties').addClass('list');
            $('#latest-properties .property-box').addClass('flipInX');
            $('#latest-properties .property-box').removeClass('flipInY');
            $('#latest-properties').removeClass('grid');
        });
        $('#grid').click(function(event){
            event.preventDefault();
            $('#grid').addClass('state-disable');
            $('#grid').removeClass('state-enable');
            // $('#grid').css({'opacity' : '0.5', 'user-select' : 'none', 'cursor' : 'not-allowed'});
            $('#list').addClass('state-enable');
            $('#list').removeClass('state-disable');
            // $('#list').css({'opacity' : '1', 'user-select' : 'initial', 'cursor' : 'pointer'});            
            $('#latest-properties').removeClass('list');
            $('#latest-properties .property-box').removeClass('flipInX');
            $('#latest-properties').addClass('grid');
            $('#latest-properties .property-box').addClass('flipInY');
        });

        // Rating with star
        $('.rating input').change(function () {
            var $radio = $(this);
            $('.rating .selected').removeClass('selected');
            $radio.closest('label').addClass('selected');
        });

        // Show/hide reviews
        $('#allReviews').on('click', function(event) {
            event.preventDefault();
            console.log('hide modal');
            $('.review-list').toggleClass('show-review hide-review');
            $(this).text($(this).text() == 'View all reviews' ? 'View less reviews' : 'View all reviews')
        });

        //Auto-clamp based on a fixed element height
        // var myParagraph = document.getElementsByClassName("post-paragraph");
        // $clamp(myParagraph, {clamp: 2});
        $('.post-paragraph').succinct({
            // omission: '&rarr;',
            size: 200
        });
        $('.recent-blogs h4').succinct({
            // omission: '&rarr;',
            size: 50
        });

        // Accordion icon change on toggle
        function toggleChevron(e) {
            $(e.target)
                .prev('.panel-heading')
                .find("i.indicator")
                .toggleClass('fa-minus-circle fa-plus-circle');
        }
        $('#accordion').on('hidden.bs.collapse', toggleChevron);
        $('#accordion').on('shown.bs.collapse', toggleChevron);

        checkWindowSize();
        $(window).resize(checkWindowSize);
        // $(window).resize($("#priceSlider, #areaSlider, #bedSlider, #bathSlider").slider());
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.header-wrapper').addClass('sticky');
            console.log('> 100');
        } else {
            $('.header-wrapper').removeClass('sticky');
            console.log('< 100');
        }
    });

    $('[data-mr-animation-delay]').css('animation-delay', function () {
        return $(this).data('mr-animation-delay')
    });

    AOS.init({
        easing: 'ease-out-back',
        offset: 150,
        once: true,
        disable: function () {
            var someText = $("body").hasClass("no-animation");
            return someText;
        }
    });

    function checkWindowSize() {
        if (window.matchMedia('(max-width: 767px)').matches) {
            console.log('Max width: 767px');
            // $(".navbar-top").appendTo(".side-collapse");
            // $(".nav-contact > li:last-child").prependTo(".nav-menu");
            // $(".navbar-top .top-left > li:first-child").prependTo(".nav-menu");
            // $(".nav-contact > li:first-child").prependTo(".nav-menu");
        }
        if (window.matchMedia('(min-width: 768px)').matches) {
            console.log('Min width: 768px');
            // $(".navbar-top").prependTo(".navbar.header-wrapper .navbar-container");
            // $(".nav-menu > li:last-child").appendTo(".nav-contact");
            // $(".nav-menu > li:nth-child(2)").prependTo(".navbar-top .top-left");
            // $(".nav-menu > li:nth-child(3)").prependTo(".nav-contact");
        }
    }

}(jQuery)); 