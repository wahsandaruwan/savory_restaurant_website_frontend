$(document).ready(function(){
    // For Sticky Navigation
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

    // Scroll Buttons
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
});