$(document).ready(function () {
  $('.mob-mnu-ic, ul.mobilemenu li a').click(function (e) {
    $('.mobilemenu').slideToggle();
    $('.dl-trigger').toggleClass('dl-active');
  });

  $('.topMenu').scroller();

  $('.testBox').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 8000,
    arrows: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: 'unslick',
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          centerMode: true,
          arrows: false,
        },
      },
    ],
  });

  $('.accordion').accordion({
    defaultOpen: 'hd-one',
    speed: 'slow',
  });
});
$(document).scroll(function () {
  if ($(this).scrollTop() > 40) {
    $('.top-fix-bar').addClass('fixed-nav');
  } else {
    $('.top-fix-bar').removeClass('fixed-nav');
  }

  if ($(this).scrollTop() > 20) {
    $('.mobilemenu').addClass('mobimenu-top');
  } else {
    $('.mobilemenu').removeClass('mobimenu-top');
  }

  let $elem = $('.footer');
  let $window = $(window);

  let docViewTop = $window.scrollTop();
  let docViewBottom = docViewTop + $window.height();

  let elemTop = $elem.offset().top;
  let elemBottom = elemTop + $elem.height();

  if (
    elemTop >= docViewBottom + 20 ||
    elemTop + $('#ctabtn-mob').height() >= docViewBottom + 134
  ) {
    $('#ctabtn-mob').css('position', 'fixed');
  } else {
    $('#ctabtn-mob').css({ position: 'relative' });
  }
});
