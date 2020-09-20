$(document).ready(function(){
    // Sticky Navigation
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    },
    {
        offset: '60px;'
    });

    // Call to Action Buttons Smooth Scrolling
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-features').click(function(){
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    // Navigation Smooth Scrolling
    $('.scroll').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // Set active class for the current section
    $(window).scroll(function(){
        // Get scrollbar position from the top
        var scrollbarLoc = $(this).scrollTop();
        $('.scroll').each(function(){
            // Get actual offset from the top
            var sectionOffset = $(this.hash).offset().top - 50;
            if(sectionOffset <= scrollbarLoc){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
            else if(scrollbarLoc <= 100){
                $(this).parent().siblings().removeClass('active');
            }
        })
    });

    // Animations on Scroll
    // For Feature
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('anim-feature-cities');
    },
    {
        offset: '40%;'
    });

    // For Steps
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('anim-step');
    },
    {
        offset: '40%;'
    });

    // For Cities
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('anim-feature-cities');
    },
    {
        offset: '40%;'
    });

    // For Plans
    $('.js--wp-5').waypoint(function(direction){
        $('.js--wp-4').addClass('anim-plans-1');
        $('.js--wp-5').addClass('anim-plans-2');
    },
    {
        offset: '40%;'
    });

    // Mobile Nav
    $('.js--nav_icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav_icon i');
        
        nav.toggleClass('hide'); 
        
        if(icon.hasClass('fa-bars')){
            icon.addClass('fa-times');
            icon.removeClass('fa-bars'); 
        }
        else{
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });
});