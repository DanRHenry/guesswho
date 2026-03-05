import { categories } from "./categories.js";

export function createCategoriesFromGameCategories(selectedCategory) {
  const categoryInfo = categories[selectedCategory].items;
  const characteristicSelector = document.getElementById("characteristic");
  while (characteristicSelector.firstChild) {
    characteristicSelector.firstChild.remove();
  }

  const descOption = document.createElement("option");
  descOption.textContent = "...";
  document.getElementById("description").append(descOption);

  const selectOption = document.createElement("option");
  selectOption.textContent = "select";
  characteristicSelector.append(selectOption);

  let characteristicsReceived = [];

  for (let i = 0; i < categoryInfo.length; i++) {
    const characteristicKeys = Object.keys(categoryInfo[i].descriptions);

    for (let characteristic of characteristicKeys) {
      characteristicsReceived.push(characteristic);
    }
  }

  characteristicsReceived = new Set(characteristicsReceived);

  for (let characteristic of characteristicsReceived) {
    if (characteristic !== "overrides") {
      const categoryOption = document.createElement("option");
      categoryOption.innerText = characteristic;
      characteristicSelector.append(categoryOption);
    }
  }

  characteristicSelector.addEventListener("change", () => {
    const desciptionSelector = document.getElementById("description");

    while (desciptionSelector.firstChild) {
      desciptionSelector.firstChild.remove();
    }

    const descOption = document.createElement("option");
    descOption.textContent = "select";
    document.getElementById("description").append(descOption);

    const selectedIndex = characteristicSelector.options.selectedIndex;
    const selected = characteristicSelector.options[selectedIndex].textContent;

    let selectedItemDescriptions = [];

    for (let i = 0; i < categoryInfo.length; i++) {
      const descriptionInformation = categoryInfo[i].descriptions[selected];

      if (descriptionInformation) {
        for (let item of descriptionInformation) {
          selectedItemDescriptions.push(item);
        }
      }
    }
    selectedItemDescriptions = new Set(selectedItemDescriptions);

    for (let description of selectedItemDescriptions) {
      if (description.length > 0) {
        const descriptionOption = document.createElement("option");
        descriptionOption.innerText = description;
        document.getElementById("description").append(descriptionOption);
      }
    }
  });
}
