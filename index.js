//auto hide/show navbar
var prevScrollpos = window.scrollY;
const nav=document.getElementById("navbar");
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "-1px";
  } else {
    nav.style.top = "-4rem";
    nav.children[1].classList.remove("show");
  }
  prevScrollpos = currentScrollPos;
}

//Animations observers
const fadeObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
      if(entry.isIntersecting) entry.target.classList.add("fadeInShow");
  });
},{threshold:0.3});

const fadeElements = document.querySelectorAll(".animateIn");
fadeElements.forEach((el)=>fadeObserver.observe(el));

const plantObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting) {
          var plants = document.querySelectorAll(".plant,.plant img");
          plants.forEach((el)=>el.classList.add("swingIn"));
        }
    });
},{threshold:0.9});

const plantWrapper = document.getElementById("plant-wrapper");
plantObserver.observe(plantWrapper);

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
const loopStopper = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      // if(entry.target.id==="landing-watcher")console.log('this');
      // console.log(document.querySelectorAll("#landing-watcher .loopAnim, #landing-rotate .loopAnim"));
      const list = entry.target.id==="landing-watcher" ? 
        document.querySelectorAll("#landing-watcher .loopAnim, #landing-rotate .loopAnim"):
        entry.target.children;
      if(entry.isIntersecting){
        for (anim of list) anim.style.animationPlayState='running';
      }
      else{
          for(anim of list) anim.style.animationPlayState='paused';
      }
    });
});
const loopAnimElem = document.querySelectorAll(".watcher");
loopAnimElem.forEach((el)=>loopStopper.observe(el));

//programattically set the height to accommodate mobile sizing
function resize(){
  if(screen.width>576){
    document.getElementById("landing").style.height=window.innerHeight+"px";
    document.getElementById("landing-watcher").style.height=window.innerHeight+"px";
  }
  const about = document.getElementById("about");
  if(about.offsetHeight>window.innerHeight) {
    about.children[0].style.position = "relative";
    about.children[0].children[0].style.position = "relative";
    about.children[0].children[0].style.margin = "0";
  }
  else {
    about.children[0].style.position = "";
    about.children[0].children[0].style.position = "";
    about.children[0].children[0].style.margin = "";
  }
}

screen.orientation.addEventListener("change",resize);
resize();
