import { categories } from "./categories.js";

export function buildGameCategoriesList() {
  for (let i = 0; i < Object.keys(categories).length; i++) {
    const categoryName = Object.keys(categories)[i];
    const category = document.createElement("input");
    category.type = "checkbox";
    category.innerText = categoryName;
    category.id = `category_${i}`;
    category.className = "gameCategoryCheckboxes";
    category.name = `category_${i}`;

    const categories_list = document.getElementById("categories_list");
    categories_list.append(category);

    const categoryLabel = document.createElement("label");
    categoryLabel.setAttribute("for", `category_${i}`);
    categoryLabel.innerText = categoryName;
    category.before(categoryLabel);
  }
}
