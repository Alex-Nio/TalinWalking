import Swiper from "./../../../js/libs/swiper-bundle.min";

const swiper = new Swiper(".tours-slider", {
  direction: "horizontal",
  loop: false,
  autoplay: {
    enabled: false,
    delay: 3000
  },
  slidesPerView: 3,
  spaceBetween: 33,
  grabCursor: true,
  speed: 800,
  navigation: {
    nextEl: ".tours-slider__button-next",
    prevEl: ".tours-slider__button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 24
    },
    340: {
      slidesPerView: 1.2,
      spaceBetween: 24
    },
    400: {
      slidesPerView: 1.3
    },
    420: {
      slidesPerView: 1.5
    },
    520: {
      slidesPerView: 1.7
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    720: {
      slidesPerView: 2.2,
      spaceBetween: 24
    },
    886: {
      slidesPerView: 2.5,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 3
    }
  }
});

const addToFavBtns = document.querySelectorAll(".tour-card-control");

addToFavBtns.forEach(btn => {
  btn.addEventListener("click", function(e) {
    btn.classList.toggle("active");
    e.stopPropagation();
  });
});
