/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
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
      // autoplay: true,

      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,

      effect: "fade",
      // autoplay: {
      //   delay: 300,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true,
      // },

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      // navigation: {
      //   prevEl: ".swiper-button-prev",
      //   nextEl: ".swiper-button-next",
      // },

      // Брейкпоинты

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
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".decorSlider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      //slidesPerView: 5,
      spaceBetween: 30,
      autoHeight: false,
      speed: 1500,
      // autoplay: true,

      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,
      centeredSlides: true,
      autoplay: {
        delay: 800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      effect: "fade",
      // autoplay: {
      //   delay: 300,
      //   disableOnInteraction: false,
      //
      // },

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      /*    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
*/
      // Брейкпоинты

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
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".projectsSlider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay, Pagination, EffectFade],
      fadeEffect: { crossFade: true },
      virtualTranslate: true,
      autoHeight: true,
      speed: 100,
      slidersPerView: 1,
      effect: "fade",

      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },

      // Брейкпоинты
      /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // События
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

      // Кнопки "влево/вправо"
      /*    navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
    */
      // Брейкпоинты

      breakpoints: {
        // 320: {
        //   slidesPerView: 1,
        //   spaceBetween: 0,
        //   autoHeight: true,
        // },
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

      // События
      on: {},
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
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

// var wiper = document.querySelector(".logos-slider").swiper;

// document
//   .querySelector(".logos-slider")
//   .addEventListener("mouseenter", function (event) {
//     wiper.autoplay.stop();
//     console.log("slider stopped");
//   });

// document
//   .querySelector(".logos-slider")
//   .addEventListener("mouseenter", function (event) {
//     wiper.autoplay.start();
//     console.log("slider started again");
//   });
