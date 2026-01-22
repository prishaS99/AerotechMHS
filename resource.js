
let index = 1;
const slidewrap = document.querySelector(".slide-wrapper");
function startTrans() {
  const vw = window.innerWidth;
  const trans = 730 - (vw - 700) / 2;
  const slidesx = slidewrap.querySelectorAll(".slide");
  slidesx.forEach(
    (slide) => (slide.style.transform = `translateX(-${trans}px)`)
  );
}
startTrans();
lastSlide();

const slides = slidewrap.querySelectorAll(".slide");

function nextSlide() {
  if (index != slides.length - 1) {
    const viewwidth = window.innerWidth;
    const translate = 730 - (viewwidth - 700) / 2;
    const slides = slidewrap.querySelectorAll(".slide");
    slides.forEach(
      (slide) =>
        (slide.style.transform = `translateX(-${translate + 720 * index}px)`)
    );
    slides[index].classList.toggle("active");
    slides[index + 1].classList.toggle("active");
    index++;
  }
}

function lastSlide() {
  if (index != 1&&index!=0) {
    console.log(index);
    const viewwidth = window.innerWidth;
    const translate = 730 - (viewwidth - 700) / 2;
    const slides = slidewrap.querySelectorAll(".slide");
    slides.forEach(
      (slide) =>
        (slide.style.transform = `translateX(-${
          translate + 720 * (index - 2)
        }px)`)
    );
    slides[index].classList.toggle("active");
    slides[index - 1].classList.toggle("active");
    index--;
    console.log(index);
  } else if (index == 1) {
    console.log(index);
    const viewwidth = window.innerWidth;
    const translate = viewwidth / 2 - 360;
    const slides = slidewrap.querySelectorAll(".slide");
    slides.forEach(
      (slide) => (slide.style.transform = `translateX(${translate}px)`)
    );
    slides[index].classList.toggle("active");
    slides[index - 1].classList.toggle("active");
    index--;
    console.log(index);
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
