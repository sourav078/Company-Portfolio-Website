(function($) {
  var windowWidth = $(window).width();
  $('.navbar-toggle').on('click', function(){
    $('#mobile-nav').slideToggle(300);
  });
  
  if (windowWidth <= 991) {
    $('.hambergar-icon').on('click', function(e){
      $('.main-nav').slideToggle(500);
      $(this).toggleClass('cross-icon');
    });
  
    $('li.menu-item-has-children > a').on('click', function(e){
      e.preventDefault();
      $(this).parent().toggleClass('sub-menu-arrow');
      $(this).next().slideToggle(300);
  
    });
  }
    
  //matchHeightCol
  if($('.mHc').length){
    $('.mHc').matchHeight();
  };
  
  //$('[data-toggle="tooltip"]').tooltip();
  
  //banner animation
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('.page-banner-bg').css({
      '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
      '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
      '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
      '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
      'transform'         : 'scale(' + (1 + scroll/2000) + ')'
    });
  });
  
  
  if($('.fancybox').length){
  $('.fancybox').fancybox({
      //openEffect  : 'none',
      //closeEffect : 'none'
    });
  
  }
  
  
  
  
  
  /**
  Responsive on 767px
  */
  
  // if (windowWidth <= 767) {
    $('.toggle-btn').on('click', function(){
      $(this).toggleClass('menu-expend');
      $('.toggle-bar ul').slideToggle(500);
    });
  
  
  // }
  
  
  
  /**
  Slick slider
  */
  if( $('.responsive-slider').length ){
      $('.responsive-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  }
  
  $(".skills").addClass("active")
    $(".skills .skill .skill-bar span").each(function() {
       $(this).animate({
          "width": $(this).parent().attr("data-bar") + "%"
       }, 1000);
       $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
    });
    setTimeout(function() {
       $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
    }, 2000);
  
  
  if( $('.hm-slider').length ){
      $('.hm-slider').slick({
        dots: true,
        infinite: false,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.bnr-nxt-prev .fl-prev'),
        nextArrow: $('.bnr-nxt-prev .fl-next'),
      });
  }
  
  if( $('.hm-project-slider').length ){
      $('.hm-project-slider').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1
      });
  }
  
  if( $('.hm-client-list-slider').length ){
      $('.hm-client-list-slider').slick({
        dots: false,
        infinite: false,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.bnr-nxt-prev2 .fl-prev'),
        nextArrow: $('.bnr-nxt-prev2 .fl-next'),
      });
  }
  
  if( $('.hm-gallery-slider').length ){
      $('.hm-gallery-slider').slick({
        dots: false,
        infinite: false,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.bnr-nxt-prev2 .fl-prev'),
        nextArrow: $('.bnr-nxt-prev2 .fl-next'),
      });
  }
  
  if( $('.hm-testimonial-slider').length ){
      $('.hm-testimonial-slider').slick({
        dots: false,
        infinite: false,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.bnr-nxt-prev3 .fl-prev'),
        nextArrow: $('.bnr-nxt-prev3 .fl-next'),
      });
  }
  
  if( $('.tst-slider').length ){
      $('.tst-slider').slick({
        dots: false,
        infinite: false,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.bnr-nxt-prev4 .fl-prev'),
        nextArrow: $('.bnr-nxt-prev4 .fl-next'),
      });
  }
  
  if( $('.hm-client-cmt-slider').length ){
      $('.hm-client-cmt-slider').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1
      });
  }
  
  
  /*Google Map*/
  var CustomMapStyles  = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
  
  if( $('#mapID').length ){
  var latitude = $('#mapID').data('latitude');
  var longitude = $('#mapID').data('longitude');
  
  var myCenter= new google.maps.LatLng(latitude,  longitude);
  function initialize(){
      var mapProp = {
        center:myCenter,
        mapTypeControl:true,
        scrollwheel: false,
        zoomControl: true,
        disableDefaultUI: true,
        zoom:7,
        streetViewControl: false,
        rotateControl: true,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        styles: CustomMapStyles
        };
  
      var map= new google.maps.Map(document.getElementById('mapID'),mapProp);
      var marker= new google.maps.Marker({
        position:myCenter,
          //icon:'map-marker.png'
        });
      marker.setMap(map);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
  
  }
  
      new WOW().init();
  
  })(jQuery);