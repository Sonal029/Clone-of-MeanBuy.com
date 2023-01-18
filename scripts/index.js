const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    loop: true,
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });   

  const swiper1 = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    }
  });


  // var swiper1 = new Swiper(".mySwiper", {
  //   slidesPerView: 6,
  //   spaceBetween: 10,
  //   direction: 'vertical',
  //   loop: true,
  //   scrollbar: {
  //         el: ".swiper-scrollbar",
  //         hide: true,
  //       },
  //   navigation: {
  //     nextEl: ".swiper-button-next1",
  //     prevEl: ".swiper-button-prev1",
  //   },
  // });