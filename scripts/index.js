import { categories } from "./categories.js";
import { buildGameCategoriesList } from "./buildGameCategoriesList.js";
import { generateCharacterToGuess } from "./generateCharacterToGuess.js";
import { createCategoriesFromGameCategories } from "./createCategoriesFromGameCategories.js";
import { buildPortraits } from "./buildPortraits.js";

const gameCategoryCheckboxes = document.getElementsByClassName(
  "gameCategoryCheckboxes",
);

buildGameCategoriesList();

if (!document.getElementsByClassName("gameCategoryCheckboxes")[0].checked) {
  document.getElementsByClassName("gameCategoryCheckboxes")[0].checked = true;
  generateCharacterToGuess(
    document.getElementsByClassName("gameCategoryCheckboxes")[0],
  );
}

for (let i = 0; i < gameCategoryCheckboxes.length; i++) {
  gameCategoryCheckboxes[i].addEventListener("click", () => {
    delete sessionStorage.characterToGuess;
    document.getElementById("guessBtn")?.remove();
    document.getElementById("justGuessBtn")?.remove();

    while (
      document.getElementById("characteristic").lastChild.innerText !== "select"
    ) {
      document.getElementById("characteristic").lastChild.remove();
    }

    if (!gameCategoryCheckboxes[i].checked) {
      const selectedCharacter = document.getElementById("selectedCharacter");
      const gameboard = document.getElementById("gameboard");
      while (gameboard.firstChild) {
        gameboard.firstChild.remove();
      }
      while (selectedCharacter.firstChild) {
        selectedCharacter.firstChild.remove();
      }
    }

    generateCharacterToGuess(gameCategoryCheckboxes[i]);
    if (sessionStorage.characterToGuess) {
      console.log(
        "guess this: ",
        JSON.parse(sessionStorage.characterToGuess).name,
      );
    }

    startCheckedGame(gameCategoryCheckboxes[i], gameCategoryCheckboxes);
  });
}

generateCharacterToGuess(gameCategoryCheckboxes[0]);
console.log("guess this: ", JSON.parse(sessionStorage.characterToGuess).name);
startCheckedGame(gameCategoryCheckboxes[0], gameCategoryCheckboxes);

function startCheckedGame(active, total) {
  const selectedDescription = document.getElementById("description");

  while (selectedDescription.firstChild) {
    selectedDescription.firstChild.remove();
  }

  if (active.checked) {
    for (let checkbox of total) {
      checkbox.checked = false;
    }

    active.checked = true;
    const selectedCategory = active.textContent;

    for (let category of categories[selectedCategory].items) {
      console.log(category)
      delete category.eliminated
    }
    createCategoriesFromGameCategories(selectedCategory);
    buildPortraits(selectedCategory, categories);
  } else {
    for (let checkbox of total) {
      checkbox.checked = false;
    }
  }
}
