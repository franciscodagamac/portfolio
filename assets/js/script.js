$(document).ready(function() {


    // start animation
    let limit = {max: 100, pullRatio: 0},
        getRandom = () => gsap.utils.random(-limit.max, limit.max),
        round = value => Math.round(value * 10000) / 10000,
        getModifier = home => value => {
          value = parseFloat(value);
          return round(value + (home - value) * limit.pullRatio) + "px";
        };

    gsap.utils.toArray(".stacks").forEach((element) => {
        wander(element, gsap.getProperty(element, "x"), gsap.getProperty(element, "y"))
    });

    function wander(element, homeX, homeY) {
        gsap.set(element, {
            x: homeX + (gsap.getProperty(element, "x") - homeX) / (1 - limit.pullRatio),
            y: homeY + (gsap.getProperty(element, "y") - homeY) / (1 - limit.pullRatio)
        });
        gsap.to(element, {
            x: homeX + getRandom(),
            y: homeY + getRandom(),
            modifiers: {
              x: getModifier(homeX),
              y: getModifier(homeY)
            },
            duration: gsap.utils.random(1.5, 4), 
            ease: "sine.inOut",
            onComplete: () => wander(element, homeX, homeY)
        });
    }
    // end animation

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
                nav: true,
                navText: [
                    '<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_62_1011)"><path d="M9.28894 14.3291L19.0889 4.5291" stroke="#292929" stroke-width="1.82" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.28894 14.3291L19.0889 24.1291" stroke="#292929" stroke-width="1.82" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_62_1011"><rect width="28" height="28" fill="white" transform="translate(0.888916 0.329102)"/></clipPath></defs></svg>',
                    '<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7111 14.3291L9.91106 24.1291" stroke="#292929" stroke-width="1.82" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.7111 14.3291L9.91106 4.5291" stroke="#292929" stroke-width="1.82" stroke-linecap="round" stroke-linejoin="round"/></svg>'
                ],
                stagePadding: 80,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0,
                    },
                    600: {
                        items: 2,
                    }
                }
            });

            $('.panel.skills .container').addClass('owl-carousel owl-theme').owlCarousel({
                margin: 60,
                nav: true,
                navText: [
                    '<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_62_1011)"><path d="M9.28894 14.3291L19.0889 4.5291" stroke="#292929" stroke-width="1.82" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.28894 14.3291L19.0889 24.1291" stroke="#292929" stroke-width="1.82" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_62_1011"><rect width="28" height="28" fill="white" transform="translate(0.888916 0.329102)"/></clipPath></defs></svg>',
                    '<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7111 14.3291L9.91106 24.1291" stroke="#292929" stroke-width="1.82" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.7111 14.3291L9.91106 4.5291" stroke="#292929" stroke-width="1.82" stroke-linecap="round" stroke-linejoin="round"/></svg>'
                ],
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
        // loop: true,
        margin: 60,
        nav: true,
        navText: [
            '<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_62_1011)"><path d="M9.28894 14.3291L19.0889 4.5291" stroke="#292929" stroke-width="1.82" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.28894 14.3291L19.0889 24.1291" stroke="#292929" stroke-width="1.82" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_62_1011"><rect width="28" height="28" fill="white" transform="translate(0.888916 0.329102)"/></clipPath></defs></svg>',
            '<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7111 14.3291L9.91106 24.1291" stroke="#292929" stroke-width="1.82" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.7111 14.3291L9.91106 4.5291" stroke="#292929" stroke-width="1.82" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        ],
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
