//Disable transitions on page load
function transitionAfterPageLoad() {
  document.body.classList.remove("preload");
}

(function () {
  transitionAfterPageLoad();
})();

//Disable transitions on resize
(function () {
  const classes = document.body.classList;
  let timer = 0;
  window.addEventListener("resize", function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    } else classes.add("stop-transitions");

    timer = setTimeout(() => {
      classes.remove("stop-transitions");
      timer = null;
    }, 100);
  });
})();

//Responsive menu functionality
const hamburgerBtn = document.getElementById("js-hamburger");
const topLine = document.getElementById("js-top-line");
const centerLine = document.getElementById("js-center-line");
const bottomLine = document.getElementById("js-bottom-line");
const nav = document.getElementById("js-nav");

hamburgerBtn.addEventListener("click", () => {
  topLine.classList.toggle("active");
  centerLine.classList.toggle("active");
  bottomLine.classList.toggle("active");
  nav.classList.toggle("show");
});
