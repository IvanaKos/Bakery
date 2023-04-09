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
