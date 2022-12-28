$(document).ready(function(){
  $('.carousel__inner').slick({
    centerMode: true,
    centerPadding: 'auto',
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/prevarrow.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/slider/nextarrow.png"></img></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // Modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on ('click', function () {
      $('.overlay, #consultation, #thanks').fadeOut('slow');
  });

  $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
  });

  // Smooth scroll and pageup

  $(window).scroll (function(){
    if ($(this).scrollTop() > 700 ) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
});