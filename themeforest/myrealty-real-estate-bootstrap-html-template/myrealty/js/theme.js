/*
	Template:		My Realty
	Author: 		Robin Hossain
	Website: 		http://rhossain.com/demo/myrealty/
	-------------------------------------------------------------------------------------------------
	File: 				theme.js ( Main JS - Main Pack )
	-------------------------------------------------------------------------------------------------

	01. Toggling classes for Sidebar
	02. Adding active class to main menu
	03. Initiating mega dropdown
	04. Toggling class for button
	05. Initiating Owl Carousel for home slider
	06. Initiating Owl Carousel for navbar featured properties
	07. Initiating Owl Carousel for featured agents
	08. Switching between Login & Regiser form
	09. Bootstrap modal with animation
	10. Initiating Bootstrap Select
	11. Initiating Ekko Lightbox
	12. Initiating Easy Autocomplete
	13. Initiating Bootstrap Range slider
	14. Togging views between List & Grid
	15. Rating with star
	16. Show/hide reviews
	17. Initiating Succinct to shorten texts
	18. Accordion icon change on toggle
	19. Toggling sticky class to header
    20. Custom data attriute for animation delay
    21. Initiating AOS for animation

	-------------------------------------------------------------------------------------------------
*/

(function ($) {
"use strict";

    $( document ).ready(function($){
      
        // 01.
        // Toggling classes for sidebar
        // ---------------------------------------------------------------------------------------------
        var sideslider = $('[data-toggle=collapse-side]');
        var sel = sideslider.attr('data-target');
        var sel2 = sideslider.attr('data-target-2');
        sideslider.click(function(event) {
            $(sel).toggleClass('in');
            $(sel2).toggleClass('out');
            $('body').toggleClass('side-on side-off');
        });

        // 02.
        // Adding active class to main menu
        // ---------------------------------------------------------------------------------------------
        $(document).on({
            mouseenter: function () {
                var mouse_is_inside = true;
                $(this).addClass('current');
            },

            mouseleave: function () {
                var mouse_is_inside = false;
                $(this).removeClass('current');
            }
        }, '.navbar-nav.nav-menu > li');

        // 03.
        // Initiating mega dropdown
        // ---------------------------------------------------------------------------------------------
        $(document).on('click', '.mega-dropdown', function(e) {
          e.stopPropagation()
        });

        // 04.
        // Toggling class for button
        // ---------------------------------------------------------------------------------------------
        $('.btn-toggle').click(function(){
            $(this).toggleClass('open');
        });

        // 05.
        // Initiating Owl Carousel for home slider
        // ---------------------------------------------------------------------------------------------
        var owl = $('#homeTopSlider');
        owl.owlCarousel({
            navigation : true,
            dotsContainer: '#homeSliderNavs',
            addClassActive: true,
            animateOut: 'slideOutDown',
            animateIn: 'fadeIn',
            smartSpeed: 1000,
            autoplay: false,
    		loop: true,
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

        // 06.
        // Initiating Owl Carousel for navbar featured properties
        // ---------------------------------------------------------------------------------------------
		$('#navFeaturedProperties').owlCarousel({
		    loop:true,
		    margin:10,
            items : 1,
            dots:false,
            nav:true,
            navText: ["<i class='fa fa-lg fa-arrow-left' aria-hidden='true'></i>","<i class='fa fa-lg fa-arrow-right' aria-hidden='true'></i>"],
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
        
        // 07.
        // Initiating Owl Carousel for featured agents
        // ---------------------------------------------------------------------------------------------
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

        // 08.
        // Switching between Login & Regiser form
        // ---------------------------------------------------------------------------------------------
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
        $('#showRegisterForm, #linkRegister, #SidenavlinkRegister, #ModallinkRegister').on('click', showRegisterForm);
        $('#showLoginForm, #linkLogin, #SidenavlinkLogin, #ModallinkLogin').on('click', showLoginForm);

        // 09.
        // Bootstrap modal with animation
        // ---------------------------------------------------------------------------------------------
        $('.modal').on('show.bs.modal', function (e) {
            // console.log('show modal');
            $('body').addClass('pr-0');
            $('.modal .modal-dialog').attr('class', 'modal-dialog  zoomIn  animated');
        });
        $('.modal').on('hide.bs.modal', function (e) {
            // console.log('hide modal');
            $('.modal .modal-dialog').attr('class', 'modal-dialog  zoomOut  animated');
        });

        // 10.
        // Initiating Bootstrap Select
        // ---------------------------------------------------------------------------------------------
        $('.selectpicker').selectpicker({
            style: 'btn-default',
            size: 4
        });

        // 11.
        // Initiating Ekko Lightbox
        // ---------------------------------------------------------------------------------------------
        $(document).on('click', '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox({
                alwaysShowClose: true,
                leftArrow: '<span><i class="fas fa-long-arrow-alt-left"></i></span>',
                rightArrow: '<span><i class="fas fa-long-arrow-alt-right"></i></span>'
            });
        });

        // 12.
        // Initiating Easy Autocomplete
        // ---------------------------------------------------------------------------------------------
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

        // 13.
        // Initiating Bootstrap Range slider
        // ---------------------------------------------------------------------------------------------
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
            // console.log(rangeSliderWidth);
        }
        rangeSliderWidth();
        $(window).resize(function(){
            rangeSliderWidth();
        });

        // 14.
        // Togging views between List & Grid
        // ---------------------------------------------------------------------------------------------
        $('#grid').addClass('state-current');
        $('#list').click(function(event){
            event.preventDefault();
            $('#list').addClass('state-current');
            $('#list').removeClass('state-enable');
            $('#grid').addClass('state-enable');
            $('#grid').removeClass('state-current');
            $('#latest-properties').addClass('list');
            $('#latest-properties .property-box').addClass('flipInX');
            $('#latest-properties .property-box').removeClass('flipInY');
            $('#latest-properties').removeClass('grid');
        });
        $('#grid').click(function(event){
            event.preventDefault();
            $('#grid').addClass('state-current');
            $('#grid').removeClass('state-enable');
            $('#list').addClass('state-enable');
            $('#list').removeClass('state-current');         
            $('#latest-properties').removeClass('list');
            $('#latest-properties .property-box').removeClass('flipInX');
            $('#latest-properties').addClass('grid');
            $('#latest-properties .property-box').addClass('flipInY');
        });

        // 15.
        // Rating with star
        // ---------------------------------------------------------------------------------------------
        $('.rating input').change(function () {
            var $radio = $(this);
            $('.rating .selected').removeClass('selected');
            $radio.closest('label').addClass('selected');
        });

        // 16.
        // Show/hide reviews
        // ---------------------------------------------------------------------------------------------
        $('#allReviews').on('click', function(event) {
            event.preventDefault();
            // console.log('hide modal');
            $('.review-list').toggleClass('show-review hide-review');
            $(this).text($(this).text() == 'View all reviews' ? 'View less reviews' : 'View all reviews')
        });

        // 17.
        // Initiating Succinct to shorten texts
        // ---------------------------------------------------------------------------------------------
        $('.post-paragraph').succinct({
            size: 200
        });
        $('.recent-blogs h4').succinct({
            size: 50
        });

        // 18.
        // Accordion icon change on toggle
        // ---------------------------------------------------------------------------------------------
        function toggleChevron(e) {
            $(e.target)
                .prev('.panel-heading')
                .find("i.indicator")
                .toggleClass('fa-minus-circle fa-plus-circle');
        }
        $('#accordion').on('hidden.bs.collapse', toggleChevron);
        $('#accordion').on('shown.bs.collapse', toggleChevron);
    });

    // 19.
    // Toggling sticky class to header
    // ---------------------------------------------------------------------------------------------
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.header-wrapper').addClass('sticky');
            // console.log('> 100');
        } else {
            $('.header-wrapper').removeClass('sticky');
            // console.log('< 100');
        }
    });

    // 20.
    // Custom data attriute for animation delay
    // ---------------------------------------------------------------------------------------------
    $('[data-mr-animation-delay]').css('animation-delay', function () {
        return $(this).data('mr-animation-delay')
    });

    // 21.
    // Initiating AOS for animation
    // ---------------------------------------------------------------------------------------------
    AOS.init({
        easing: 'ease-out-back',
        offset: 150,
        once: true,
        disable: function () {
            var someText = $("body").hasClass("no-animation");
            return someText;
        }
    });

}(jQuery)); 