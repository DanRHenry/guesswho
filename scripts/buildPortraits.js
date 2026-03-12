export function buildPortraits(selectedCategory, originalCategories) {
  // console.log(originalCategories)
  const categories = {...originalCategories}
  // console.log(categories)
  // console.log(
  //   "character to guess: ",
  //   JSON.parse(sessionStorage.characterToGuess).name,
  // );
  document.getElementById("gameboard").innerHTML = "";
  const allCharacters = categories[selectedCategory].items;

  let total = 0;

  for (let i = 0; i < allCharacters.length; i++) {
    if (allCharacters[i].eliminated) {
      total++;
    }
  }

  if (total === allCharacters.length - 1) {
    alert(
      `Congratulations! You have narrowed the list down to ${JSON.parse(sessionStorage.characterToGuess).name}!`,
    );
  }

  const prefix = "http://127.0.0.1:5500/";
  let suffix;

  const selectedCharacter = document.getElementById("selectedCharacter");
  while (selectedCharacter.firstChild) {
    selectedCharacter.firstChild.remove();
  }

  for (let i = 0; i < allCharacters.length; i++) {
    const portrait = document.createElement("img");

    if (allCharacters[i].eliminated) {
      suffix = `assets/excluded.jpg`;
    } else {
      suffix = allCharacters[i].portrait;
    }

    portrait.src = prefix + suffix;
    portrait.alt = `${allCharacters[i].name}'s portrait`;
    portrait.className = "portraits";

    document.getElementById("gameboard").append(portrait);

    if (allCharacters[i].portrait !== "/assets/excluded.jpg") {
      portrait.addEventListener("click", function highlightCharacter() {
        while (selectedCharacter.firstChild) {
          selectedCharacter.firstChild.remove();
        }

        const portraitLabel = document.createElement("div")
        // portraitLabel.setAttribute("for", "activePortrait")
        // portraitLabel.innerText = this.name
        portraitLabel.innerText = this.alt

        const portrait = document.createElement("img");
        portrait.src = this.src;
        portrait.alt = this.alt;
        portrait.id = "activePortrait"
        portrait.className = "selectedPortraits";
        selectedCharacter.append(portrait);
        selectedCharacter.append(portraitLabel)

        const justGuessBtn = document.createElement("button");
        justGuessBtn.id = "justGuessBtn";
        justGuessBtn.innerText = "Just Guess This";

        document.getElementById("justGuessBtn")?.remove();
        document.getElementById("informationSection").append(justGuessBtn);

        justGuessBtn.addEventListener("click", function () {
          if (
            JSON.stringify(allCharacters[i]) === sessionStorage.characterToGuess
          ) {
            alert(`Congratulations! ${allCharacters[i].name} is Correct!`);
          } else {
            alert(`Sorry, ${allCharacters[i].name} is not correct...`);
          }
        });
      });
    }
  }

  const eliminationFeedback = document.createElement("div");
  eliminationFeedback.id = "eliminationFeedback";
  eliminationFeedback.className = "eliminationFeedbackSections";

  if (!document.getElementById("eliminationFeedback")) {
    document.getElementById("informationSection").append(eliminationFeedback);
  }

  const eliminateBtn = document.createElement("button");
  eliminateBtn.innerText = "Eliminate";
  eliminateBtn.id = "eliminateBtn";
  document.getElementById("eliminateBtn")?.remove();
  document.getElementById("informationSection").append(eliminateBtn);

  eliminateBtn.addEventListener("click", handleEliminateBtnClick);

  function handleEliminateBtnClick() {
    let response = "";
    let responseSuffix = "";

    eliminateBtn.removeEventListener("click", handleEliminateBtnClick);
    eliminateBtn.addEventListener("click", handleEliminateBtnClick);

    const characteristicSelector = document.getElementById("characteristic");
    const descriptionSelector = document.getElementById("description");

    if (
      characteristicSelector.options[
        characteristicSelector.options.selectedIndex
      ].innerText === "select" || descriptionSelector.options[descriptionSelector.options.selectedIndex].innerText === "select"
    )
      return;

    const activeCharacteristicSelection =
      characteristicSelector.options[
        characteristicSelector.options.selectedIndex
      ].innerText;

    const activeDescriptionSelection =
      descriptionSelector.options[descriptionSelector.options.selectedIndex]
        .innerText;

    const guessMeDescriptions = JSON.parse(
      sessionStorage.characterToGuess,
    ).descriptions;

    const allCharacters = categories[selectedCategory].items;

    if (categories[selectedCategory].overrides[activeDescriptionSelection]) {
      responseSuffix =
        categories[selectedCategory].overrides[activeDescriptionSelection] +
        "!";
    } else {
      responseSuffix = `${activeDescriptionSelection} ${activeCharacteristicSelection}!`;
    }

    let match;
    if (
      guessMeDescriptions[activeCharacteristicSelection] &&
      guessMeDescriptions[activeCharacteristicSelection].includes(
        activeDescriptionSelection,
      )
    ) {
      response = `Yes, my pick has `;
      document.getElementById("eliminationFeedback").innerText =
        response + responseSuffix;
      match = true;
    } else {
      response = `No, my pick doesn't have `;
      document.getElementById("eliminationFeedback").innerText =
        response + responseSuffix;
      match = false;
    }

    for (let character of allCharacters) {
      if (match) {
        if (
          !character.descriptions[activeCharacteristicSelection] ||
          !character.descriptions[activeCharacteristicSelection].includes(
            activeDescriptionSelection,
          )
        ) {
          character.eliminated = true;
        }
      } else {
        if (
          character.descriptions[activeCharacteristicSelection]?.includes(
            activeDescriptionSelection,
          )
        ) {
          character.eliminated = true;
        }
      }
    }
    buildPortraits(selectedCategory, categories);
  }
}
