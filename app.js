//gsap animation
let loopTL = gsap.timeline({repeat:-1, yoyo: true});
loopTL.to(".jump", { y:"-1rem", duration:1, ease:"power1.inOut"})
let loadTL = gsap.timeline();
loadTL.from(".phone-num", { duration:1,scale:0,y:"-5rem"});
loadTL.from(".icon", { scale: 0,opacity: 0, y:"6rem", duration:.5,});


loadTL.from("li", { scale: 0, opacity:0, stagger: {amount:0.5}, duration:.5}, .5);

//firt scrolltrigger
let scrollTL = gsap.timeline({
  scrollTrigger: {
    trigger:".animated-img",
    toggleActions:"play pause resume reverse"
  }
});
scrollTL.from(".animated-img", {opacity: 0, duration:1, scale: 0});

//second scrolltrigger
let scrollTL2 = gsap.timeline({
  scrollTrigger: {
    trigger:".animated-img2",
    toggleActions:"play pause resume reverse"
  }
});
scrollTL2.from(".animated-img2", {opacity: 0, duration:1, scale: 0});

//third scrolltrigger
let scrollTL3 = gsap.timeline({
  scrollTrigger: {
    trigger:".animated-img3",
    toggleActions:"play pause resume reverse"
  }
});
scrollTL3.from(".animated-img3", {opacity: 0, duration:1, scale: 0});


//stagger scrolltrigger
let scrollTLs = gsap.timeline({
  scrollTrigger: {
    trigger:".list",
    toggleActions:"play pause resume reverse"
  }
});
scrollTLs.from(".list", { scale: 0.5,opacity: 0, y:"6rem", duration:1});


//stagger scrolltrigger
let scrollTLg = gsap.timeline({
  scrollTrigger: {
    trigger:".g-container",
    toggleActions:"play pause resume reverse"
  }
});
scrollTLg.from(".g-container", { scale: 0, stagger: {amount:0.5}, duration:1});


//*************hide menu***************

const hamburger = document.querySelector('#hamburger');
const linksContainer = document.querySelector('.links-container')
const navUl = document.querySelector('#nav-ul');


hamburger.addEventListener('click', function () {
    //linksContainer.classList.toggle('show');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = navUl.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});


//fixed nav 
 const navbar = document.getElementById("nav");
 const topLink = document.querySelector(".top-link");

 window.addEventListener("scroll", function () {
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
    // setup back to top link
  
    if (scrollHeight > 500) {
      console.log("helo");
  
      topLink.classList.add("show-link");
    } else {
      topLink.classList.remove("show-link");
    }
  });

  // ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights
