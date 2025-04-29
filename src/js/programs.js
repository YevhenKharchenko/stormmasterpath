import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { observeSwiperAutoplay } from './observer.js';

Swiper.use([Autoplay]);

const programsSwiperEl = document.querySelector('.programs-swiper-container');

let programsSwiper;

programsSwiper = new Swiper('.programs-swiper-container', {
  direction: 'horizontal',
  // loop: true,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 0,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      initialSlide: 1,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.programs-swiper-container')
        .classList.add('show');
    },
  },
});

observeSwiperAutoplay(programsSwiper, programsSwiperEl);
