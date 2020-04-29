import '../scss/main.scss';
//import 'jquery';
//import 'popper.js';
//import 'bootstrap';
import '../jss/portfolio.js';
import '../jss/menu.js';



$(window).on('load', function() {


    /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

    // Sticky Nav
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    // one page navigation
    $('.navbar-nav').onePageNav({
        currentClass: 'active'
    });


    /* Back Top Link acive
   ========================================================*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });

    $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
