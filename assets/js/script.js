$(document).ready(function() {

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('shrink');
        } else {
            $('header').removeClass('shrink');
        }

        $('.section').each(function() {
            var sectionTop = $(this).offset().top - $('header').outerHeight();
            var sectionBottom = sectionTop + $(this).outerHeight();
            var scrollPosition = $(window).scrollTop();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                var currentId = $(this).attr('id');
                $('nav a.header-a').removeClass('active');
                $('nav a.header-a[href="#' + currentId + '"]').addClass('active');
            }
        });
    });

    $('header nav a.header-a').on('click', function(e) {
        e.preventDefault();
        $('header nav a.header-a').removeClass('active');
        $(this).addClass('active');
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 600);
    });

    $('.menu-toggle').on('click', function() {
        $('nav').toggleClass('active');
        $(this).html($(this).text() === '☰' ? '✖' : '☰');
    });

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
