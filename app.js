//gsap animation
gsap.from(".animated-img", { duration:1,scale:0});

//firt scrolltrigger
let scrollTL = gsap.timeline({
  scrollTrigger: {
    trigger:".animated-img2",
    toggleActions:"play pause resume reverse"
  }
});
scrollTL.from(".animated-img2", {opacity: 0, duration:1, scale: 0});

//second scrolltrigger

let scrollTL2 = gsap.timeline({
  scrollTrigger: {
    trigger:".card",
    toggleActions:"play pause resume reverse"
  }
});
scrollTL2.from(".card", { scale: 0, stagger: {amount:0.5, from:"random"}, duration:1});

//third scrolltrigger

let scrollTL3 = gsap.timeline({
  scrollTrigger: {
    trigger:".move-up",
    toggleActions:"play pause resume reverse"
  }
});
scrollTL3.from(".move-up", { opacity: 0, y:"6rem", duration:1});


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
