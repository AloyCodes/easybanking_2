const nav = document.querySelector(".navlink")
const navOpen = document.querySelector(".ri-menu-fill")
const navClose = document.querySelector(".ri-close-fill")
const html = document.querySelector('html')
const navLinks = document.querySelectorAll(".navlink a")

console.log(navLinks)

function menuOpen(){
  nav.style.top = "35%"
  navOpen.style.display = "none"
  navClose.style.display = "block"
  html.style.overflowY = "hidden"
}


function menuClose(){
  nav.style.top = "-35%"
  navOpen.style.display = "block"
  navClose.style.display = "none"
  html.style.overflowY = "scroll"
}


navLinks.forEach(function(navLink) {
  navLink.addEventListener("click", function(){
    nav.style.top = "-35%"
    navOpen.style.display = "block"
    navClose.style.display = "none"
    html.style.overflowY = "scroll"
  })
})

// Get the button:
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
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}








AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});