$(window).on('load', function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $('body').addClass('ios');
  } else {
    $('body').addClass('web');
  }
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


  if ($('input, select').length) {
    $('input, select').styler();
  }
  //if ($('.fancybox').length) {
  //  $('.fancybox').fancybox({
  //    margin: 10,
  //    padding: 10
  //  });
  //}
  if ($('.multiple-items').length) {
    $('.multiple-items').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      appendArrows: $('.arrows'),
      prevArrow: '<div class="arrows__prev"><span class="arrows__symbol">&#8249</span></div>',
      nextArrow: '<div class="arrows__next"><span class="arrows__symbol">&#8250</span></div>',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  }
  if ($('.scroll').length) {
    $('.scroll').mCustomScrollbar({
      theme: "minimal-dark"
    });
  }
  ;

  /* components */


});

var handler = function () {

  var height_footer = $('footer').height();
  var height_header = $('header').height();
  //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


  var viewport_wid = viewport().width;
  var viewport_height = viewport().height;

  if (viewport_wid <= 767) {

    //$('.js-showFilters').click(function (e) {
    //  $('.js-accordion').addClass('active');
    //  $(this).toggle('.hidden');
    //});

  }
};
$(window).bind('load', handler);
$(window).bind('resize', handler);


document.addEventListener("DOMContentLoaded", () => {

  $('.js-radioLabel').click(function () {
    $('.js-radioText').removeClass('active');
    $(this).find('.js-radioText').addClass('active');
  });

  $('.js-showFilters').click(function () {
    $('.js-accordion').addClass('active');
    $(this).parent().get(0).style.display = 'none';
  });

  $('.js-accordionTitle').click(function () {
    $(this).toggleClass('active');
    $(this).next('.js-accordionBody').toggleClass('active');
  });

});


