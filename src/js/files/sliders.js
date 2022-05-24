
import Swiper, { Pagination, Navigation, Autoplay, EffectFade } from "swiper";

import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import "swiper/css";

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector(".gamesSlider")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".gamesSlider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 7,
      spaceBetween: 50,
      autoHeight: false,
      speed: 800,
      lazy: true,
      loop: true,


      effect: "fade",
 

      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 30,
 
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1268: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
      },

      // События
      on: {},
    });
  }
  /// decor slider
  if (document.querySelector(".decorSlider")) {

    new Swiper(".decorSlider", {
    
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
  
      spaceBetween: 30,
      autoHeight: false,
      speed: 1500,

      loop: true,
   
    lazy: true,
      centeredSlides: true,
      autoplay: {
        delay: 800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      effect: "fade",

      breakpoints: {
        320: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
        1268: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },

      // События
      on: {},
    });
  }
  if (document.querySelector(".projectsSlider")) {

    new Swiper(".projectsSlider", {
  
      modules: [Navigation, Autoplay, Pagination, EffectFade],
      fadeEffect: { crossFade: true },
      virtualTranslate: true,
      autoHeight: false,
      speed: 100,
      slidersPerView: 1,
      effect: "fade",
      lazy: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
  
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },

      
      on: {},
    });
  }
  /// REVIEWS slider
  if (document.querySelector(".reviewsSlider")) {
    new Swiper(".reviewsSlider", {
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      //slidesPerView: 3.9,
      spaceBetween: 50,
      autoHeight: false,
      speed: 1500,
      autoplay: true,
      loop: true,

      centeredSlides: true,
      autoplay: {
        delay: 800,
        disableOnInteraction: false,
      },

    

      breakpoints: {
  
        320: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
        1268: {
          slidesPerView: 3.9,
        },
      },

      
      on: {},
    });
  }
}

function initSlidersScroll() {

  bildSliders();

  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});

