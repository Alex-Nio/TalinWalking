import Swiper from "./../../../js/libs/swiper-bundle.min";

function handleBtnClick() {
  const btns = document.querySelectorAll(".btn");

  btns.forEach(btn => {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      const popup = document.querySelector(".popup"),
        body = document.querySelector("body");

      popup.classList.add("popup-opened");
      body.classList.add("locked");
    });
  });
}

const swiper = new Swiper(".about-slider", {
  direction: "horizontal",
  loop: false,
  autoplay: {
    enabled: false,
    delay: 3000
  },
  slidesPerView: 4,
  spaceBetween: 32,
  grabCursor: true,
  speed: 800,
  navigation: {
    nextEl: ".about-slider__button-next",
    prevEl: ".about-slider__button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 24
    },
    320: {
      slidesPerView: 1.2,
      spaceBetween: 24
    },
    480: {
      slidesPerView: 2
    },
    660: {
      slidesPerView: 2.3
    },
    768: {
      slidesPerView: 3
    },
    998: {
      slidesPerView: 4
    }
  }
});

document.addEventListener("DOMContentLoaded", handleBtnClick);
