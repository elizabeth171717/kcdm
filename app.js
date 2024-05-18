//gsap animation
gsap.from(".hero-intro", { y:"-6rem", duratio:3})

let scrollTL = gsap.timeline({
  scrollTrigger:{
    trigger: ".logo",
  }
});

scrollTL.from(".logo", {opacity:0, scale:0, duration:1})

let scrollTL2 = gsap.timeline({
  scrollTrigger:{
    trigger: ".over-lay",
  }
});

scrollTL2.from(".over-lay", {opacity:0, scale:0, x:"5rem", duration:1})




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





