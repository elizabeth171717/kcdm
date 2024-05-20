//gsap animation


let scrollTL = gsap.timeline({
  scrollTrigger:{
    trigger: ".logo",
    toggleActions:"play pause resume reverse",
  }
});

scrollTL.from(".logo", {opacity:0, scale:0, duration:1})


let scrollTL2 = gsap.timeline({
  scrollTrigger:{
    trigger: ".bullet",
    toggleActions:"play pause resume reverse",
  }
});

scrollTL2.from(".bullet", { scale:0, stagger:{each:0.5} ,duratio:1});

let scrollTL3 = gsap.timeline({
  scrollTrigger:{
    trigger: ".list",
    toggleActions:"play pause resume reverse",
  }
});

scrollTL3.from(".list", { scale:0, stagger:{amount:0.5} ,duratio:1});


let scrollTL4 = gsap.timeline({
  scrollTrigger:{
    trigger: ".gallery-img",
    toggleActions:"play pause resume reverse",
  }
});

scrollTL4.from(".gallery-img", { opacity:0,scale:0, stagger:{amount:0.5} ,duratio:1});

let scrollTL5 = gsap.timeline({
  scrollTrigger:{
    trigger: ".icon",
    toggleActions:"play pause resume reverse",
  }
});

scrollTL5.from(".icon", { opacity:0,scale:0, stagger:{amount:0.5} ,duratio:1});


let scrollTL6 = gsap.timeline({
  scrollTrigger:{
    trigger: ".bottom",
    toggleActions:"play pause resume reverse",
  }
});

scrollTL6.from(".cta", { opacity:0.5,y:"6rem",duratio:1});


let scrollTL7 = gsap.timeline({
  scrollTrigger:{
    trigger: ".services-cards",
    toggleActions:"play pause resume reverse",
  }
});

scrollTL7.from(".services-cards", { opacity:0.5,x:"6rem",duratio:1});

//NAV
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.scroll-link');

const navSlide = () => {


//TOGGLE NAV
burger.addEventListener('click', () => {

nav.classList.toggle('nav-active');
//BUGER ANIMATION
burger.classList.toggle('toggle');
});
nav.addEventListener("click", () => {
    nav.classList.remove('nav-active');
//BUGER ANIMATION
burger.classList.remove('toggle');
})

}
navSlide();


const slides = document.querySelectorAll(".slider img");
let slideIndex = 0;
let intervalId = null;


//initializesSlider

document.addEventListener("DOMContentLoaded", initializeSlider);

 function initializeSlider(){
   if(slides.length > 0){
    slides[slideIndex].classList.add("displaySlide");
    intervalId= setInterval(nextSlide,2000)
   }
 }

 function showSlide(index){

  if(index >= slides.length){
    slideIndex = 0;
  } else if( index < 0){
    slideIndex = slides.length - 1;
  }
   
slides.forEach(slide => {
    slide.classList.remove("displaySlide");
});

slides[slideIndex].classList.add("displaySlide");
 }

 function prevSlide(){
slideIndex --;
showSlide(slideIndex);
 }

 function nextSlide(){
slideIndex++;
showSlide(slideIndex);
 }
