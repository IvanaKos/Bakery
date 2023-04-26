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

// const tabButtons = recipeDetails.querySelectorAll(".tab-button");
// const tabContents = recipeDetails.querySelectorAll(".tab-pane");

// tabButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const tab = button.dataset.tab;
//     tabButtons.forEach((button) =>
//       button.classList.remove("tab-active", "tab-button-active")
//     );
//     tabContents.forEach((content) =>
//       content.classList.remove("tab-active", "tab-button-active")
//     );
//     button.classList.add("tab-active", "tab-button-active");
//     recipeDetails
//       .querySelector(`.tab-content .tab-pane[data-tab="${tab}"]`)
//       .classList.add("tab-active");
//   });
// });

// 2nd OPTION

// const tabButtons = recipeDetails.querySelectorAll(".tab-button");
// const tabContents = recipeDetails.querySelectorAll(".tab-pane");

// recipeDetails.addEventListener("click", (event) => {
//   if (!event.target.matches(".tab-button")) {
//     return;
//   }
//   const tab = event.target.dataset.tab;

//   tabButtons.forEach((button) => {
//     button.classList.remove("tab-active", "tab-button-active");
//   });
//   tabContents.forEach((content) => {
//     content.classList.remove("tab-active", "tab-button-active");
//   });

//   event.target.classList.add("tab-active", "tab-button-active");
//   recipeDetails
//     .querySelector(`.tab-content .tab-pane[data-tab="${tab}"]`)
//     .classList.add("tab-active");
// });

//3rd OPTION

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
