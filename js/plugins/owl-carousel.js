$(document).ready(function () {



    var owl = $(".slider-mainpage");

    owl.owlCarousel({
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1000, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
        autoPlay: true,
        loop: true,
        autoplayTimeout: 900,
        navigationText: [
              "<i class='fa fa-chevron-left'></i>",
              "<i class='fa fa-chevron-right'></i>"
          ]

    });



    var owl = $(".doctors-carousel");

    owl.owlCarousel({
        items: 3, //10 items above 1000px browser width
        margin: 10,
        itemsDesktop: [1000, 2], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
        autoPlay: true,
        loop: true,
        autoplayTimeout: 500,
        navigationText: [
              "<i class='fa fa-chevron-left'></i>",
              "<i class='fa fa-chevron-right'></i>"
          ]
    });
 


    var owl = $(".doctors-services-carousel");

    owl.owlCarousel({
        items: 3, //10 items above 1000px browser width
        margin: 10,
        itemsDesktop: [1000, 2], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
        autoPlay: true,
        loop: true,
        autoplayTimeout: 500,
        navigationText: [
              "<i class='fa fa-chevron-left'></i>",
              "<i class='fa fa-chevron-right'></i>"
          ]
    });





    var owl = $(".gallery");

    owl.owlCarousel({
        items: 4, //10 items above 1000px browser width
        margin: 10,
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 4], // betweem 900px and 601px
        itemsTablet: [600, 3], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
        autoPlay: true,
        loop: true,
        autoplayTimeout: 500,
        navigationText: [
              "<i class='fa fa-chevron-left'></i>",
              "<i class='fa fa-chevron-right'></i>"
          ]
    });


    var owl = $(".services-gallery");

    owl.owlCarousel({
        items: 2, //10 items above 1000px browser width
        margin: 10,
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 4], // betweem 900px and 601px
        itemsTablet: [600, 3], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
        autoPlay: true,
        loop: true,
        autoplayTimeout: 500,
        navigationText: [
              "<i class='fa fa-chevron-left'></i>",
              "<i class='fa fa-chevron-right'></i>"
          ]
    });


    var owl = $(".responses-mainpage");

    owl.owlCarousel({
        items: 2, //10 items above 1000px browser width
        itemsDesktop: [1000, 2], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
        autoPlay: true,
        loop: true,
        margin: 0,
        autoplayTimeout: 500,
        navigationText: [
              "<i class='fa fa-chevron-left'></i>",
              "<i class='fa fa-chevron-right'></i>"
          ]
    });




});