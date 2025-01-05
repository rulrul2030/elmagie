$(document).ready(function () {

  $(".gnb .depth2").hide();

  $(".gnb > li").hover(function () {
    $(this).find(".depth2").stop().slideToggle();
  });

  var reviewList = new Swiper(".review-list", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

  });

  // AOS 초기화
  AOS.init({
    once: true, // 스크롤 다시 올려도 애니메이션 실행
    offset: 120, // 애니메이션 시작 위치
  });

});