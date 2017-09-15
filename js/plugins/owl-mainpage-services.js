

    $(document).ready(function() {
     

           
      var owl = $(".owl-clients-v1");
     
      owl.owlCarousel({
          items: 4, 
        itemsDesktop: [1000, 5],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2], 
        itemsMobile: [365, 1], 
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


      
   var owl = $(".services-listing");

    owl.owlCarousel({
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 3], 
        itemsDesktopSmall: [900, 3], 
        itemsTablet: [600, 2], 
        itemsMobile: [365, 1], 
        navigation: false,
        autoPlay: true,
        loop: true,
        margin: 0,
        autoplayTimeout: 500,

    });



      
      
   var owl = $(".team-listing");

    owl.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], 
        itemsDesktopSmall: [900, 4], 
        itemsTablet: [600, 2], 
        itemsMobile: [365, 1], 
        navigation: false,
        autoPlay: true,
        loop: true,
        margin: 100,
        autoplayTimeout: 500,

    });



      

    });

