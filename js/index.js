// filter when pink women's button is clicked

function filterGirls() {
  const girlsButton = document.querySelector("#pink-button");
  girlsButton.addEventListener("click", () => {
    const girlsColors = document.querySelectorAll(".female");
    girlsColors.forEach((girlColor) => {
      girlColor.style.display = "inline-block";
    });
    const boysColors = document.querySelectorAll(".male");
    boysColors.forEach((boyColor) => {
      boyColor.style.display = "none";
    });
    const childColors = document.querySelectorAll(".child");
    childColors.forEach((childColor) => {
      childColor.style.display = "none";
    });
  });
}

// filter when blue men's button is clicked

function filterBoys() {
  const boysButton = document.querySelector("#blue-button");
  boysButton.addEventListener("click", () => {
    const boysColors = document.querySelectorAll(".male");
    boysColors.forEach((boyColor) => {
      boyColor.style.display = "inline-block";
    });
    const girlsColors = document.querySelectorAll(".female");
    girlsColors.forEach((girlColor) => {
      girlColor.style.display = "none";
    });
    const childColors = document.querySelectorAll(".child");
    childColors.forEach((childColor) => {
      childColor.style.display = "none";
    });
  });
}

// filter when yellow womenandmen's button is clicked

function filterBoth() {
  const boysAndGirlsButton = document.querySelector("#yellow-button");
  boysAndGirlsButton.addEventListener("click", () => {
    const boysColors = document.querySelectorAll(".male");
    boysColors.forEach((boyColor) => {
      boyColor.style.display = "inline-block";
    });
    const girlsColors = document.querySelectorAll(".female");
    girlsColors.forEach((girlColor) => {
      girlColor.style.display = "inline-block";
    });
    const childColors = document.querySelectorAll(".child");
    childColors.forEach((childColor) => {
      childColor.style.display = "none";
    });
  });
}

// filter when green child's button is clicked

function filterKids() {
  const childrenButton = document.querySelector("#green-button");
  childrenButton.addEventListener("click", () => {
    const childColors = document.querySelectorAll(".child");
    childColors.forEach((childColor) => {
      childColor.style.display = "inline-block";
    });
    const boysColors = document.querySelectorAll(".male");
    boysColors.forEach((boyColor) => {
      boyColor.style.display = "none";
    });
    const girlsColors = document.querySelectorAll(".female");
    girlsColors.forEach((girlColor) => {
      girlColor.style.display = "none";
    });
  });
}

// toggle darkmode when sunglasses are clicked

function switchLightDark() {
  const sunglassesButton = document.querySelector("#darkmode");
  const containerEl = document.querySelector("#container");
  sunglassesButton.addEventListener("click", () => {
    containerEl.classList.toggle("activeSunglasses");
    const activatedSunglasses = document.querySelector(".activeSunglasses");
    if (activatedSunglasses === null) {
      containerEl.style.filter = "initial";
    } else {
      containerEl.style.filter = "invert(1) hue-rotate(180deg)";
    }
  });
}
// call filter functions when DOM loaded

window.addEventListener("DOMContentLoaded", () => {
  filterGirls();
  filterBoys();
  filterBoth();
  filterKids();
  switchLightDark();
});
