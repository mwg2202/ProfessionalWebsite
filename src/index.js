import './homepage.scss';


$(document).ready(function(){
    $('.projects').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });

    $('.miniprojects').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
});
