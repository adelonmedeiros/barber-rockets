// open and close the menu when the button is clicked
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

// close the menu when a item is clicked
const links = document.querySelectorAll("nav ul li a");

for (const element of links) {
  element.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

function changeHeaderWhenScrroll() {
  const header = document.querySelector("#header"); // get the header
  const navHeight = header.offsetHeight; // get the height of the header

  if (this.window.scrollY >= navHeight) {
    // if the window is scrolled more than the height of the header
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll"); // remove the class
  }
}



// Testimonials carousel slider swiper
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: { 
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

// ScrollReveal show the elements when the page is scrolled
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
#home .text, #home .image,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social`,
  { interval: 100 }
);

// Back to top
function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top");

  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

window.addEventListener("scroll", function () { // add an event listener to the window
  changeHeaderWhenScrroll()
  backToTop()
});