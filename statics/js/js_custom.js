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
  $('.header_menu_mb').click(function(e) {
    if ($(e.target).closest('.menu-title').length === 0 && $(e.target).closest('.sidenav-dropdown-menu').length === 0) {
      $('.menu_mb_btn').removeClass('open');
      $(this).removeClass('active');
    }
    return false;
  });
}
if ($('.menu-title').length) {
  $('.menu-title').click(function(e) {
    e.preventDefault();
    e.stopPropagation(); 

    const $parentLi = $(this).closest('li');
    const $dropdownMenu = $parentLi.find('.sidenav-dropdown-menu');

    $('.menu-title').not(this).removeClass('active');
    $('.sidenav-dropdown-menu').not($dropdownMenu).removeClass('active');

    $(this).toggleClass('active');
    $dropdownMenu.toggleClass('active');
  });
}
if ($('.header_submenu_back').length) {
  $('.header_submenu_back').click(function(e) {
    e.preventDefault();
    e.stopPropagation(); 
    $('.menu-title').removeClass('active');
    $('.sidenav-dropdown-menu').removeClass('active');
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
if ($('.slick-carousel-item').length) {
  $('.slick-carousel-item').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><span><i class="icon-font icon-chevron_left"></i></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span><i class="icon-font icon-chevron_right"></i></span></button>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
if ($('.slick-carousel-4-item').length) {
  $('.slick-carousel-4-item').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><span><i class="icon-font icon-chevron_left"></i></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span><i class="icon-font icon-chevron_right"></i></span></button>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
if ($('.scroll-top').length) {
  $(".scroll-top").click(function(event){
   $('html, body').animate({ scrollTop: 0 }, 100);
  });
  // Hide,Show ScrollToTop
  var num = 100;  
  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {   
          $('.scroll-top').addClass('fixed');
      }
      else
      {
          $('.scroll-top').removeClass('fixed');
      }
  });
}
// End Scroll To Top 
});