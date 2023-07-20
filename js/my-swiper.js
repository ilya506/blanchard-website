

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.js-hero-swiper', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 10000
    }
  });
});
 //gallery
  document.addEventListener("DOMContentLoaded", () => {

 let gallerySlider = new Swiper(".js-gallery-swiper", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".gallery .gallery-swiper__slider-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery-swiper__btn-next",
    prevEl: ".gallery-swiper__btn-prev"
  },
  breakpoints: {
   321: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1025: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },


  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  }, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});

});
//events
document.addEventListener("DOMContentLoaded", () => {

  let gallerySlider = new Swiper(".js-events-swiper", {
   slidesPerView: 1,
   grid: {
     rows: 1,
     fill: "row"
   },
   pagination: {
    el: '.events .events__swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: ".events__swiper-btn-next",
    prevEl: ".events__swiper-btn-prev"
  },
   breakpoints: {





     599: {
       slidesPerView: 2,
       spaceBetween: 34
     },
     1023: {
       slidesPerView: 3,
       spaceBetween: 27
     },
     1919: {
       slidesPerView: 3,
       spaceBetween: 50,

     }

   },


   a11y: false,
   keyboard: {
     enabled: true,
     onlyInViewport: true
   }, // можно управлять с клавиатуры стрелками влево/вправо

   // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
   watchSlidesProgress: true,
   watchSlidesVisibility: true,
   slideVisibleClass: "slide-visible",

   on: {
     init: function () {
       this.slides.forEach((slide) => {
         if (!slide.classList.contains("slide-visible")) {
           slide.tabIndex = "-1";
         } else {
           slide.tabIndex = "";
         }
       });
     },
     slideChange: function () {
       this.slides.forEach((slide) => {
         if (!slide.classList.contains("slide-visible")) {
           slide.tabIndex = "-1";
         } else {
           slide.tabIndex = "";
         }
       });
     }
   }

   // on: {
   //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
   //   beforeResize: function () {
   //     this.slides.forEach((el) => {
   //       el.style.marginTop = "";
   //     });
   //   }
   // }
 });

 });
//project
document.addEventListener("DOMContentLoaded", () => {

  let gallerySlider = new Swiper(".js-projects-swiper", {
   slidesPerView: 1,

   loop: true,

  navigation: {
    nextEl: ".projects__swiper-btn-next",
    prevEl: ".projects__swiper-btn-prev"
  },
   breakpoints: {



    600: {
       slidesPerView: 2,
       spaceBetween: 34
     },

     769: {
      slidesPerView: 2,
       spaceBetween: 50
     },
     1025: {
       slidesPerView: 3,
       spaceBetween: 50
     },


   },


   a11y: false,
   keyboard: {
     enabled: true,
     onlyInViewport: true
   }, // можно управлять с клавиатуры стрелками влево/вправо

   // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
   watchSlidesProgress: true,
   watchSlidesVisibility: true,
   slideVisibleClass: "slide-visible",

   on: {
     init: function () {
       this.slides.forEach((slide) => {
         if (!slide.classList.contains("slide-visible")) {
           slide.tabIndex = "-1";
         } else {
           slide.tabIndex = "";
         }
       });
     },
     slideChange: function () {
       this.slides.forEach((slide) => {
         if (!slide.classList.contains("slide-visible")) {
           slide.tabIndex = "-1";
         } else {
           slide.tabIndex = "";
         }
       });
     }
   }

   // on: {
   //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
   //   beforeResize: function () {
   //     this.slides.forEach((el) => {
   //       el.style.marginTop = "";
   //     });
   //   }
   // }
 });

 });
