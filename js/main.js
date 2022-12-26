$(function(){
    $('.main__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade:true,
        responsive: [
            {
              breakpoint: 1200, //включается на 1 px меньше
              settings: {
                dots: false
              }
            },
          ]
    });
    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
        fade:false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1176, //включается на 1 px меньше
            settings: {
              slidesToShow: 3,
            }
          },
          {  
            breakpoint: 1001,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 601,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
    })
    $('.menu__btn').on('click', function(){
        $('.menu').toggleClass('menu--active')
    })
});
