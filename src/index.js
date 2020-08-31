import './homepage.scss';


$(document).ready(function(){
    $('.projects').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
  });
