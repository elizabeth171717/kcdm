//NAVIGATION BAR STARTS

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu .addEventListener('click', mobileMenu);

//show active menu when scrolling 

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    const contactMenu = document.querySelector('#contact-page')
    let scrollPos = window.scrollY

    //adds highlights class to my menu items

    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
       
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }   else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
       return
    }

    if (elem && window.innerWidth < 960 && scrollPos < 600 || elem) {
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//close mobile menu when clicking on a menu item


const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

//NAVIGATION BAR ENDS


//gsap animation

gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause"
  });
  
  gsap.to(".home-container", {
    scrollTrigger: ".home-container", 
    duration: 1, 
    rotation: 360
  });


  gsap.to(".animated-text", {
    scrollTrigger: ".animated-text", 
    duration: 1, 
    rotation: 360
  });

 gsap.to(".animated-img", {
    scrollTrigger: ".animated-img", 
    duration: 1, 
    rotation: 360
  });
  
gsap.to(".gallery-section", {
    scrollTrigger: {
      trigger: ".gallery-section",
      toggleActions: "restart pause reverse pause"
    }, 
    duration: 2, 
    backgroundColor: " hsl(210, 22%, 49%)", 
    ease: "none"
  });

 gsap.to(".service", {
    scrollTrigger: {
      trigger: ".service",
      toggleActions: "restart pause reverse pause"
    }, 
    duration: 2, 
    color: "hsl(56, 100%, 51%)", 
    ease: "none"
  });
