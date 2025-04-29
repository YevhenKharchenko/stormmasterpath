import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { observeSwiperAutoplay } from './observer.js';

Swiper.use([Autoplay]);

const mentorsSwiperEl = document.querySelector('.mentors-swiper-container');

let mentorsSwiper;

mentorsSwiper = new Swiper('.mentors-swiper-container', {
  direction: 'horizontal',
  // loop: true,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 8,
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
      spaceBetween: 20,
    },
  },
  on: {
    init: () => {
      document.querySelector('.mentors-swiper-container').classList.add('show');
    },
  },
});

observeSwiperAutoplay(mentorsSwiper, mentorsSwiperEl);
