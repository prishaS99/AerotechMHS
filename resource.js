
let index = 1;
const slidewrap = document.querySelector(".slide-wrapper");
function setActiveSlide(nextIndex) {
  const slides = slidewrap.querySelectorAll(".slide");
  if (!slides.length) {
    return;
  }

  index = Math.max(0, Math.min(nextIndex, slides.length - 1));
  const activeSlide = slides[index];
  const centeredOffset = activeSlide.offsetLeft - Math.max(0, (window.innerWidth - activeSlide.offsetWidth) / 2);

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${centeredOffset}px)`;
  });

  slides.forEach((slide, currentIndex) => {
    slide.classList.toggle("active", currentIndex === index);
  });
}

setActiveSlide(0);

function nextSlide() {
  const slides = slidewrap.querySelectorAll(".slide");
  if (index < slides.length - 1) {
    setActiveSlide(index + 1);
  }
}

function lastSlide() {
  if (index > 0) {
    setActiveSlide(index - 1);
  }
}

function nextclicked() {
  nextSlide();
}

function backclicked() {
  lastSlide();
}

const nextbutton = document.querySelector(".next");
const backbutton = document.querySelector(".back");

nextbutton.addEventListener("click", nextclicked);
backbutton.addEventListener("click", backclicked);

window.addEventListener("resize", () => {
  setActiveSlide(index);
});
