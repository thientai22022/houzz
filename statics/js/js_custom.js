$(document).ready(function(){
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
if ($('.search_mb').length) {
  $('.search_mb').click(function() {
    $(this).toggleClass('open');
    $('.header_search').toggleClass('active');
    return false;
  });
}
if ($('.menu_mb_btn').length) {
  $('.menu_mb_btn').click(function() {
    $(this).toggleClass('open');
    $('.header_menu_mb').toggleClass('active');
    return false;
  });
}
if ($('.header_menu_mb').length) {
  $('.header_menu_mb').click(function() {
    $('.menu_mb_btn').removeClass('open')
    $(this).removeClass('active');
    return false;
  });
}
if ($('.slick-category').length) {
  $('.slick-category').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 16,
    slidesToScroll: 16,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><span><i class="icon-font icon-chevron_left"></i></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span><i class="icon-font icon-chevron_right"></i></span></button>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 9,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
}
// Scroll To Top
if ($('.scroll-pagination').length) {
  $(".scroll-pagination").click(function(event){
   $('html, body').animate({ scrollTop: 0 }, 100);
  });
  // Hide,Show ScrollToTop
  var num = 100;  
  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {   
          $('.scroll-pagination').addClass('fixed');
      }
      else
      {
          $('.scroll-pagination').removeClass('fixed');
      }
  });
}
// End Scroll To Top 
});