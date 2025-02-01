$(document).ready(function(){

    $(".main").onepage_scroll({
        sectionContainer: "section.panel",
        loop: false,
        keyboard: true
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 2
    });


});
