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
});