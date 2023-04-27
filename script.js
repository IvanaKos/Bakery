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
  mediaQueryList.removeEventListener("change", openMenu);
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

//Additional-recipes-card

const additionalRecipesCard = document.querySelector(".additional-recipe-card");
const fullRecipeButton = additionalRecipesCard.querySelector("#open-recipe-js");
const recipeHeader = additionalRecipesCard.querySelector(
  ".recipe-details-header"
);
const recipeDetails = additionalRecipesCard.querySelector(".recipe-details");
const imgCard = additionalRecipesCard.querySelector(".recipe-img img");
const prepInfoCard = additionalRecipesCard.querySelector("#prep-info");
const prepInfoReplacement = additionalRecipesCard.querySelector(
  ".prep-info-replacement"
);

let isRecipeDisplayed = false;

function openHeader() {
  recipeHeader.classList.add("slide-in-card");
  recipeHeader.classList.remove("slide-out-card");
}

function closeHeader() {
  recipeHeader.classList.add("slide-out-card");
  recipeHeader.classList.remove("slide-in-card");
}

function openDetails() {
  recipeDetails.classList.add("slide-in-card");
  recipeDetails.classList.remove("slide-out-card");
}

function closeDetails() {
  recipeDetails.classList.add("slide-out-card");
  recipeDetails.classList.remove("slide-in-card");
}

function changeButtonToClose() {
  fullRecipeButton.classList.add("animation");
  fullRecipeButton.innerHTML = "CLOSE";
}

function changeButtonToRecipe() {
  fullRecipeButton.innerHTML = "RECIPE";
  fullRecipeButton.classList.remove("animation");
}

function showPrepInfo() {
  prepInfoCard.classList.remove("hide-prep-info");
}

function hidePrepInfo() {
  prepInfoCard.classList.add("hide-prep-info");
}

function fadeInPrepInfoReplacement() {
  prepInfoReplacement.classList.add("prep-info-replacement-visible");
  prepInfoReplacement.classList.remove("hide-prep-info-replacement");
}

function fadeOutPrepInfoReplacement() {
  prepInfoReplacement.classList.remove("prep-info-replacement-visible");
  prepInfoReplacement.classList.add("hide-prep-info-replacement");
}

function handleWindowChange() {
  if (isRecipeDisplayed === true) {
    hidePrepInfo();
    fadeInPrepInfoReplacement();
  } else {
    showPrepInfo();
    fadeOutPrepInfoReplacement();
  }
}

function openFullRecipe() {
  isRecipeDisplayed = true;
  changeButtonToClose();
  openHeader();
  openDetails();
  imgCard.classList.add("move-img");
  handleWindowChange();
}

function closeFullRecipe() {
  isRecipeDisplayed = false;
  changeButtonToRecipe();
  closeHeader();
  closeDetails();
  imgCard.classList.remove("move-img");
  handleWindowChange();
}

function toggleRecipeDisplay() {
  if (isRecipeDisplayed === false) {
    openFullRecipe();
  } else {
    closeFullRecipe();
  }
}

fullRecipeButton.addEventListener("click", toggleRecipeDisplay);

//Additional-recipes-card - Tab functionality

const tabButtons = recipeDetails.querySelectorAll(".tab-button");
const tabContents = recipeDetails.querySelectorAll(".tab-pane");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.tab;
    tabButtons.forEach((button) => {
      button.classList.toggle("tab-active", button === event.target);
      button.classList.toggle("tab-button-active", button === event.target);
    });
    tabContents.forEach((content) =>
      content.classList.toggle("tab-active", content.dataset.tab === tab)
    );
  });
});
