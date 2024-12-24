$(document).ready(function(){

  $(".gnb .depth2").hide();

  $(".gnb > li").hover(function(){
    $(this).find(".depth2").stop().slideToggle();
  });

  var reviewList = new Swiper(".review-list", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop : true,

    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },

  });
    
});