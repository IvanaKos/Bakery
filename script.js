const hamburgerBtn = document.getElementById("js-hamburger");
const topLine = document.getElementById("js-top-line");
const centerLine = document.getElementById("js-center-line");
const bottomLine = document.getElementById("js-bottom-line");
const nav = document.getElementById("js-nav");

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("my-nav").style.width = "35%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("my-nav").style.width = "0%";
}

hamburgerBtn.addEventListener("click", () => {
  topLine.classList.toggle("active");
  centerLine.classList.toggle("active");
  bottomLine.classList.toggle("active");

  let activeBtn = topLine.classList.contains("active");
  if (activeBtn) {
    openNav();
  } else {
    closeNav();
  }
});
