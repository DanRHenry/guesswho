import { categories } from "./categories.js";
const gameboard = document.getElementById("gameboard");
const selectedCharacter = document.getElementById("selectedCharacter");

console.log(categories);

const targetCharacter = categories.foods[Math.floor(Math.random(categories.foods.length) * categories.foods.length)]
console.log(targetCharacter)

const foodsList = categories.foods;

for (let food of foodsList) {
  const portrait = document.createElement("img");
  const suffix = food.portrait;
  const prefix = "http://127.0.0.1:5500/";
  portrait.src = prefix + suffix;
  portrait.alt = `${food.name}'s portrait`;
  portrait.className = "potraits";
  gameboard.append(portrait);
  portrait.addEventListener("click", function highlightCharacter() {
    while (selectedCharacter.firstChild) {
      selectedCharacter.firstChild.remove();
    }
    const portrait = document.createElement("img");
    portrait.src = prefix + suffix;
    portrait.alt = `${food.name}'s portrait`;
    portrait.className = "selectedPortraits";
    selectedCharacter.append(portrait);

    const guessBtn = document.createElement("button")
    guessBtn.innerText = "Guess"
    portrait.after(guessBtn)

    guessBtn.addEventListener("click", function (){
        console.log(food.name)
        if (food.name === targetCharacter.name) {
            // console.log("that's right")
            alert(`Congratulations! ${food.name} is Correct!`)
        }
        else {
            alert(`Sorry, ${food.name} is not correct...`)
            // console.log("not it")
        }
    })
  });
}

