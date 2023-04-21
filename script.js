//Responsive menu

const mainHeader = document.getElementById("main-header");
const menuBtn = mainHeader.querySelector("#js-hamburger");
const topLine = mainHeader.querySelector("#js-top-line");
const centerLine = mainHeader.querySelector("#js-center-line");
const bottomLine = mainHeader.querySelector("#js-bottom-line");
const navOverlay = mainHeader.querySelector("#nav-overlay");

const mediaQuery = "only screen and (max-width: 768px)";
const mediaQueryList = window.matchMedia(mediaQuery);

let menuClicked = false;

function handleMenuWidth() {
  if (mediaQueryList.matches) {
    navOverlay.style.width = "100%";
  } else {
    navOverlay.style.width = "35%";
  }
}

function openMenu() {
  if (menuClicked) {
    handleMenuWidth();
    mediaQueryList.addEventListener("change", openMenu);
  } else {
    closeMenu();
  }
}

function closeMenu() {
  navOverlay.style.width = "0%";
}

function toggleMenuIcon() {
  topLine.classList.toggle("active");
  centerLine.classList.toggle("active");
  bottomLine.classList.toggle("active");
}

function deactivateMenuIcon() {
  topLine.classList.remove("active");
  centerLine.classList.remove("active");
  bottomLine.classList.remove("active");
}

function handleOverlayActivation() {
  if (menuClicked === false) {
    menuClicked = true;
    openMenu();
  } else {
    menuClicked = false;
    closeMenu();
  }
}

function handleMenuActivation() {
  toggleMenuIcon();
  handleOverlayActivation();
}

menuBtn.addEventListener("click", handleMenuActivation);

function resetMenu() {
  if (window.innerWidth > 1200) {
    deactivateMenuIcon();
    closeMenu();
    menuClicked = false;
  }
}

window.addEventListener("resize", resetMenu);

//END Responsive menu
