const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();
tl.fromTo(hero, 1, {height:"0%"}, {height:"80%", ease: Power2.easeInOut})
  .fromTo(hero, 1.4, {width:"100%"}, {width:"80%", ease: Power2.easeInOut})
  .fromTo(slider, 1.4, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut}, "-=1.4") 
  .fromTo(logo, 0.5, {x:"30", opacity:0}, {x:"0", opacity:1, ease: Power2.easeInOut}, "-=0.5")  
  .fromTo(hamburger, 0.5, {x:"30", opacity:0}, {x:"0", opacity:1, ease: Power2.easeInOut}, "-=0.5")
  .fromTo(headline, 1, {y:"-90%", opacity:0}, {y:"-80%", opacity:1, ease: Power2.easeIn}, "-=0.5")
  