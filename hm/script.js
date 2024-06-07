function toggleTexts(sectionId, buttonId) {
  const section = document.getElementById(sectionId);
  const button = document.getElementById(buttonId);

  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "flex";
    button.style.display = "none";
  } else {
    section.style.display = "none";
    button.style.display = "flex";
  }
}

function togglePriceRange() {
  const priceRangeSection = document.getElementById("priceRangeSection");

  if (priceRangeSection.style.display === "none" || priceRangeSection.style.display === "") {
    priceRangeSection.style.display = "flex";
  } else {
    priceRangeSection.style.display = "none";
  }
}

function selectOption(event, optionElement) {
  event.stopPropagation();
  const parentSection = optionElement.parentElement;
  const options = parentSection.querySelectorAll(".option-item");
  options.forEach((option) => {
    option.classList.remove("selected");
  });
  optionElement.classList.add("selected");
}

function updateDisplayedPrice() {
  const priceRangeInput = document.getElementById("priceRangeInput");
  const displayedPrice = document.getElementById("displayedPrice");
  displayedPrice.textContent = priceRangeInput.value;
}

document.getElementById("priceRangeInput").addEventListener("input", updateDisplayedPrice);
updateDisplayedPrice();

document.addEventListener("DOMContentLoaded", () => {
  const filterOptions = document.querySelectorAll(".filter-option");

  filterOptions.forEach((filterOption) => {
    filterOption.addEventListener("click", () => {
      filterOptions.forEach((option) => option.classList.remove("selected"));
      filterOption.classList.add("selected");
    });
  });

  // Ajout des écouteurs d'événements pour les nouveaux filtres
  const selectOptions = document.querySelectorAll(".select-option");
  selectOptions.forEach((option) => {
    option.addEventListener("click", (event) => selectOption(event, option));
  });

  // Gestion de la sélection de couleur
  document.querySelectorAll(".circle").forEach((circle) => {
    circle.addEventListener("click", function () {
      document.querySelectorAll(".circle").forEach((c) => c.classList.remove("selected"));
      this.classList.add("selected");
    });
  });

  // Fonction de réinitialisation des filtres
  document.querySelector(".typereini-button").addEventListener("click", () => {
    document.querySelectorAll(".option-item.selected").forEach((item) => item.classList.remove("selected"));
    document.querySelectorAll(".circle.selected").forEach((circle) => circle.classList.remove("selected"));
    document.querySelector(".circle[data-color='gris']").classList.add("selected"); // Sélectionne le cercle gris par défaut
    document.getElementById("priceRangeInput").value = 10;
    updateDisplayedPrice();

    // Réinitialiser les filtres Photos
    document.querySelectorAll(".select-option.selected").forEach((option) => option.classList.remove("selected"));
  });
});
