new WOW().init();

// hero section swiper slider js
var swiper = new Swiper(".hero__swiper__banner", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000
  });



// nav bar sticky
$(window).scroll(function(){
  // sticky navbar on scroll script
  if(this.scrollY > 845){
      $('.menu__section').addClass("sticky");
  }else{
      $('.menu__section').removeClass("sticky");
  }

  // scroll-up button show/hide script
  if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
  }else{
      $('.scroll-up-btn').removeClass("show");
  }
});

$('.scroll-up-btn').click(function(){
$('html').animate({scrollTop: 0});
// removing smooth scroll on slide-up button click
$('html').css("scrollBehavior", "auto");
});


// story section js
var swiper = new Swiper(".story__swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    // slidesPerView: 3,
    // freeMode: true,
    spaceBetween: -1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



// mobile menu bar open js
$(".menu__bar").click(function(){
    $(".mobile__menu").addClass("open");
  })

  $(".mobile__menubar").click(function(){
    $(".mobile__menu").removeClass("open");
  })



  // count down section js
  $(".coundown__inner")
  .countdown("2022/06/01", function(event) {
    $('#day').text(
      event.strftime('%D')
    );
    $('#hours').text(
      event.strftime('%H')
    );
    $('#minutes').text(
      event.strftime('%M')
    );
    $('#seconds').text(
      event.strftime('%S')
    );
  });

  // gallery section 
  $('.gallerys').magnificPopup({
    type:'image',
    delegate: 'a',
    gallery: {
      enabled: true
    },
  });

  // wishes section
  