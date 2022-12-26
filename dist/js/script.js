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
});