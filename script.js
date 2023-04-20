//Additional-recipes-card

const additionalRecipesCard = document.querySelector(".additional-recipe-card");
const fullRecipeButton = document.getElementById("open-recipe-js");
const recipeHeader = additionalRecipesCard.querySelector(
  ".recipe-details-header"
);
const recipeDetails = additionalRecipesCard.querySelector(".recipe-details");
const imgCard = additionalRecipesCard.querySelector(".recipe-img img");
const prepInfoCard = document.getElementById("prep-info");

var isRecipeDisplayed = false;

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

function showPrepInfo() {
  prepInfoCard.classList.remove("hide-prep-info");
}

function hidePrepInfo() {
  prepInfoCard.classList.add("hide-prep-info");
}

function handleWindowChange() {
  if (isRecipeDisplayed === true) {
    hidePrepInfo();
  } else {
    showPrepInfo();
  }
}

function openFullRecipe() {
  isRecipeDisplayed = true;
  fullRecipeButton.innerHTML = "CLOSE";
  openHeader();
  openDetails();
  imgCard.classList.add("move-img");
  handleWindowChange();
}

function closeFullRecipe() {
  isRecipeDisplayed = false;
  fullRecipeButton.innerHTML = "FULL RECIPE";
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

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content .tab-pane");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.tab;
    tabButtons.forEach((button) =>
      button.classList.remove("tab-active", "tab-button-active")
    );
    tabContents.forEach((content) =>
      content.classList.remove("tab-active", "tab-button-active")
    );
    button.classList.add("tab-active", "tab-button-active");
    document
      .querySelector(`.tab-content .tab-pane[data-tab="${tab}"]`)
      .classList.add("tab-active");
  });
});
