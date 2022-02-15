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

const header = document.querySelector("#header"); // get the header
const navHeight = header.offsetHeight; // get the height of the header

window.addEventListener("scroll", function () {
  // add an event listener to the window
  if (this.window.scrollY >= navHeight) {
    // if the window is scrolled more than the height of the header
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll"); // remove the class
  }
});
