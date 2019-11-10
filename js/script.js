$(document).ready(function () {

$('.hamburger').on('click', function (event) {
   event.preventDefault();
   $('.menu-xs').slideToggle(1000);
});


//hover about
   $('.about__bar > div:nth-child(1)').hover(function () {
      $('.box__inner').css({background: '#9c5da5'});
   });

   $('.about__bar > div:nth-child(2)').hover(function () {
      $('.box__inner').css({background: '#11b0de'});
   });

   $('.about__bar > div:nth-child(3)').hover(function () {
      $('.box__inner').css({background: '#d67f7f'});
   });

   $('.about__bar > div:nth-child(4)').hover(function () {
      $('.box__inner').css({background: '#20bc9d'});
   });

   $('.about__bar > div:nth-child(5)').hover(function () {
      $('.box__inner').css({background: '#bb8a36'});
   });


   $('.services__menu').mouseenter(function () {
       $('.services__box').css({background: '#18cfab'})
   });
    $('.services__menu').mouseleave(function () {
        $('.services__box').css({background: '#797979'})
    });


});
