$(document).ready(function(){

    function resizeWindow() {
        if ($(window).width() <= 1024) {
            $('.panel.my-services .columns').addClass('owl-carousel owl-theme').owlCarousel({
                margin: 60,
                nav: false,
                stagePadding: 80,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    }
                }
            });

            $('.panel.skills .container').addClass('owl-carousel owl-theme').owlCarousel({
                margin: 60,
                nav: false,
                stagePadding: 80,
                responsive: {
                    0: {
                        items: 1,
                        margin: 30,
                        stagePadding: 60,
                    },
                    600: {
                        items: 3,
                    }
                }
            });
        } else {
            $('.panel.my-services .columns, .panel.skills .container').removeClass('owl-carousel owl-theme').trigger('destroy.owl.carousel');
        }
    }
    
    resizeWindow();

    $(window).resize(function() {
        resizeWindow();
    });

    $('.worksectioncarousel').owlCarousel({
        loop: true,
        margin: 60,
        nav: false,
        stagePadding: 80,
        responsive: {
            0: {
                items: 1,
                margin: 30,
                stagePadding: 60,
            },
            600: {
                items: 2,
            },
            1024: {
                items: 3,
            },
            1330: {
                items: 4,
            }
        }
    });
});
