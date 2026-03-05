import { categories } from "./categories.js";

export function generateCharacterToGuess(checkbox) {
  if (checkbox.checked) {
    let characterToGuess =
      categories[checkbox.textContent].items[
        Math.floor(
          Math.random(categories[checkbox.textContent].items) *
            categories[checkbox.textContent].items.length,
        )
      ];
    sessionStorage.characterToGuess = JSON.stringify(characterToGuess);
  }
}
