const fullRecipeButton = document.getElementById("open-recipe-js");
const recipeHeader = document.querySelector(".recipe-details-header");
const recipeDetails = document.querySelector(".recipe-details");
const imgCard = document.querySelector(".recipe-img img");

var checkButton = false;

function openFullRecipe() {
  fullRecipeButton.innerHTML = "CLOSE";
  recipeHeader.classList.add("slide-in-card");
  recipeHeader.classList.remove("slide-out-card");
  recipeDetails.classList.add("slide-in-card");
  recipeDetails.classList.remove("slide-out-card");
  imgCard.classList.add("move-img");
  checkButton = true;
}

function closeFullRecipe() {
  fullRecipeButton.innerHTML = "FULL RECIPE";
  recipeHeader.classList.add("slide-out-card");
  recipeHeader.classList.remove("slide-in-card");
  recipeDetails.classList.add("slide-out-card");
  recipeDetails.classList.remove("slide-in-card");
  imgCard.classList.remove("move-img");
  checkButton = false;
}

function openCloseButton() {
  if (checkButton === false) {
    openFullRecipe();
  } else {
    closeFullRecipe();
  }
}

fullRecipeButton.addEventListener("click", openCloseButton);

//Tab functionality

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

//prep-info-card responsive

const prepInfoCard = document.getElementById("prep-info");
const mediaQuery = window.matchMedia("(max-width: 767px)");

function togglePrepInfoCard() {
  prepInfoCard.classList.toggle("hide-prep-info");
}

fullRecipeButton.addEventListener("click", function () {
  if (mediaQuery.matches) {
    togglePrepInfoCard();
  }
});

mediaQuery.addListener(function (event) {
  if (!event.matches) {
    prepInfoCard.classList.remove("hide-prep-info");
  }
});
