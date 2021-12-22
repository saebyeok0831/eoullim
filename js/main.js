$(window).ready(function() {

    $(".menu_togle").click(function(e) {
        e.preventDefault( );
        $("nav").toggleClass("active")
    })


    $('.multiple_slider').bxSlider({
        minSlides:2,
        maxSlides:4,
        moveSlides:1,
        slideWidth:446,
        slideMargin:5,
        pager:false,
        nextText: '<i class="fas fa-chevron-right"></i>',
        prevText: '<i class="fas fa-chevron-left"></i>'
     });

    //  $('.main_slider').bxSlider({

    //  });

});