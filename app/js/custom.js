$(window).on('load', function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $('body').addClass('ios');
  } else {
    $('body').addClass('web');
  }
  ;
  $('body').removeClass('loaded');

});
/* viewport width */
function viewport() {
  var e = window,
    a = 'inner';
  if (!( 'innerWidth' in window )) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return {width: e[a + 'Width'], height: e[a + 'Height']}
};
/* viewport width */
$(function () {
  /* placeholder*/
  $('input, textarea').each(function () {
    var placeholder = $(this).attr('placeholder');
    $(this).focus(function () {
      $(this).attr('placeholder', '');
    });
    $(this).focusout(function () {
      $(this).attr('placeholder', placeholder);
    });
  });
  /* placeholder*/

  $('.button-nav').click(function () {
    $(this).toggleClass('active'),
      $('.main-nav-list').slideToggle();
    return false;
  });

  /* components */


  //if ($('.styled').length) {
  //  $('.styled').styler();
  //}
  //if ($('.fancybox').length) {
  //  $('.fancybox').fancybox({
  //    margin: 10,
  //    padding: 10
  //  });
  //}
  if ($('.slick-slider').length) {
    console.log('test1');
    $('.slick-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
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
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  //if ($('.scroll').length) {
  //  $(".scroll").mCustomScrollbar({
  //    axis: "x",
  //    theme: "dark-thin",
  //    autoExpandScrollbar: true,
  //    advanced: {autoExpandHorizontalScroll: true}
  //  });
  //};


  /* components */


});

var handler = function () {

  var height_footer = $('footer').height();
  var height_header = $('header').height();
  //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


  var viewport_wid = viewport().width;
  var viewport_height = viewport().height;

  if (viewport_wid <= 767) {

    $('.js-showFilters').click(function (e) {
      $(this).parent().toggle('.active');
    });

  }
};
$(window).bind('load', handler);
$(window).bind('resize', handler);

//$(document).ready(function () {
//  $('.slick-slider').slick({
//    dots: true,
//    infinite: false,
//    speed: 300,
//    slidesToShow: 3,
//    slidesToScroll: 3
//  })
//});

