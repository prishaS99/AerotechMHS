// nav
const navbar = document.querySelector("nav");
var title = document.querySelector(".clubtitle");
const scroller = document.querySelector(".littlerocket");
const scrolls = document.querySelector(".scrolls");
let lastScrollTop = 0;
  let move = 0;

window.addEventListener("scroll", () => {
    const rect = scroller.getBoundingClientRect();
  const inView = rect.top <window.innerHeight && rect.bottom >10;
  let currentScrollTop = document.documentElement.scrollTop;
 

  if (inView) {
    if (currentScrollTop> lastScrollTop) {
      move++;
      if (move>136) {
        move = 136;
      }
    } else if (currentScrollTop < lastScrollTop) {
      move--;
      if (move<0) {
        move=0;
      }
  
    }
    scroller.style.transform = "rotate(90deg)";
    scrolls.style.transform = `translateX(${-95+0.7*move}vw)`;
  }
  if (rect.bottom<10) {
    move = 130;
  }
  if (rect.top>window.innerHeight) {
    move=0;
  }
  lastScrollTop = currentScrollTop;
  if (window.scrollY > 500) {
    navbar.classList.add("scrolledmore");
  } else if (window.scrollY > 100) {
    title.classList.add("scrolled");
    navbar.classList.remove("scrolledmore");
    navbar.classList.add("scrolled");
  } else {
    title.classList.remove("scrolled");
    navbar.classList.remove("scrolled");
  }

});
// popups

var asa = document.getElementById("asa");
var tarc = document.getElementById("tarc");

var opentarc = document.getElementById("opentarc");
var openasa = document.getElementById("openasa");

var closetarc = document.getElementById("close-tarc");
var closeasa = document.getElementById("close-asa");

openasa.addEventListener("click", OpenASA);
opentarc.addEventListener("click", OpenTARC);

closeasa.addEventListener("click", CloseASA);
closetarc.addEventListener("click", CloseTARC);

function OpenASA() {
  asa.style.display = "block";
}

function OpenTARC() {
  tarc.style.display = "block";
}

function CloseASA() {
  asa.style.display = "none";
}

function CloseTARC() {
  tarc.style.display = "none";
}

// image carousel T.T

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

setActiveSlide(index);

let slideindex = 0;
function addSlide() {
  const slides = slidewrap.querySelectorAll(".slide");
  let toBeDuplicated = slides[slideindex];
  let cloned = toBeDuplicated.cloneNode(true);
  slidewrap.appendChild(cloned);
  slideindex++;
}

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

let intervalId;
let intervalId2;
intervalId = setInterval(nextSlide, 2000);
intervalId2 = setInterval(addSlide, 2000);

function loop() {
  if (intervalId == null && intervalId2 == null) {
    intervalId = setInterval(nextSlide, 2000);
    intervalId2 = setInterval(addSlide, 2000);
  }
}

// google forms

function formHeight() {
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const form1 = document.getElementById("googleform1");
  form1.style.height = `${0.9 * vh}px`;
  form1.style.width = `${0.9 * vw}px`;
  const form2 = document.getElementById("googleform2");
  form2.style.height = `${0.9 * vh}px`;
  form2.style.width = `${0.9 * vw}px`;
}

setInterval(formHeight, 1000);

// team stuff

const profnext = document.querySelector(".nextprof");
const profback = document.querySelector(".backprof");
const teammove = document.querySelector(".move");
var imgs = document.querySelectorAll(".imgs");
var count = 0;

function returnimg() {
  imgs.forEach(img=>{
  img.style.transform = "rotate(0deg)"
  });
}

function start(){
    setActiveProfile(count);
}

const profiles = document.querySelectorAll(".individual");

function setActiveProfile(nextIndex) {
  if (!profiles.length) {
    return;
  }

  count = Math.max(0, Math.min(nextIndex, profiles.length - 1));
  const activeProfile = profiles[count];
  const mobileView = window.innerWidth <= 768;
  let offset = mobileView
  ? activeProfile.offsetLeft
  : activeProfile.offsetLeft - (window.innerWidth - activeProfile.offsetWidth) / 2;

  offset = Math.max(0, offset);
  teammove.style.transform = `translateX(-${offset}px)`;
}

function nextperson() {
  if (count < profiles.length - 1){
  imgs.forEach(img=>{
    img.style.transform = "rotate(-25deg)"
  });
  setActiveProfile(count + 1);

  setTimeout(returnimg, 250);
}
}

function lastperson() {
  if (count>0) {
  imgs.forEach(img=>{
  img.style.transform = "rotate(25deg)"
  });  
  setActiveProfile(count - 1);
  setTimeout(returnimg, 250);
}
}

start();
profnext.addEventListener("click", nextperson);
profback.addEventListener("click", lastperson);


// addEventListener

function nextclicked() {
  clearInterval(intervalId);
  intervalId = null;
  clearInterval(intervalId2);
  intervalId2 = null;
  nextSlide();
  addSlide();
  setTimeout(loop, 7000);
}

function backclicked() {
  clearInterval(intervalId);
  intervalId = null;
  clearInterval(intervalId2);
  intervalId2 = null;
  lastSlide();
  setTimeout(loop, 7000);
}

const nextbutton = document.querySelector(".next");
const backbutton = document.querySelector(".back");

nextbutton.addEventListener("click", nextclicked);
backbutton.addEventListener("click", backclicked);

window.addEventListener("resize", () => {
  setActiveSlide(index);
  setActiveProfile(count);
});

// swipe function
