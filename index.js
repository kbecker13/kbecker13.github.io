//auto hide/show navbar
var prevScrollpos = window.scrollY;
const nav=document.getElementById("navbar");
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "-1px";
  } else {
    nav.style.top = "-4rem";
  }
  prevScrollpos = currentScrollPos;
}

//Animations observers
const fadeObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting) entry.target.classList.add("fadeInShow");
    });
},{threshold:0.5});

const fadeElements = document.querySelectorAll(".animateIn");
fadeElements.forEach((el)=>fadeObserver.observe(el));

// This code is from Medium.com's article: How to optimize image loading on your website
(() => {
    'use strict';
    // Page is loaded
    const objects = document.getElementsByClassName('asyncImage');
    Array.from(objects).map((item) => {
      // Start loading image
      const img = new Image();
      img.src = item.dataset.src;
      // Once image is loaded replace the src of the HTML element
      img.onload = () => {
        item.classList.remove('asyncImage');
        return item.nodeName === 'IMG' ? 
          item.src = item.dataset.src :        
          item.style.backgroundImage = `url(${item.dataset.src})`;
      };
    });
  })();

//Stop looping animations when offscreen
const landingLoopStopper = new IntersectionObserver((watch)=>{
    watch.forEach((entry)=>{
        if(entry.isIntersecting){
            loopAnimElem.forEach((anim)=>{
                anim.style.animationPlayState='running';
            });
        }
        else{
            loopAnimElem.forEach((anim)=>{
                anim.style.animationPlayState='paused';
            });
        }
    });
});
const loopAnimElem = document.querySelectorAll(".loopAnim");
const landingWatcher = document.getElementById("landing-watcher");
landingLoopStopper.observe(landingWatcher,loopAnimElem);

//submit contact form
function onSubmit(token){
    document.getElementById("contact-form").submit();
}