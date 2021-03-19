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
  const headerEl = document.querySelector("header");
  const navTooltip = document.querySelectorAll("nav .tooltip");
  const mainTooltip = document.querySelectorAll("main .tooltip");
  sunglassesButton.addEventListener("click", () => {
    containerEl.classList.toggle("activeSunglasses");
    const activatedSunglasses = document.querySelector(".activeSunglasses");
    if (activatedSunglasses === null) {
      containerEl.style.backgroundColor = "#fdfdfd";
      headerEl.style.color = "#363f4c";
      navTooltip.forEach((tooltip) => {
        tooltip.style.backgroundColor = "#fdfdfd";
        tooltip.style.border = "1px solid white";
      });
      sunglassesButton.style.color = "#363f4c";
      mainTooltip.forEach((tooltip) => {
        tooltip.style.backgroundColor = "#eed994";
        tooltip.style.color = "white";
        tooltip.style.border = "1px solid white";
      });
    } else {
      containerEl.style.backgroundColor = "#161B22";
      headerEl.style.color = "#bcbcbc";
      navTooltip.forEach((tooltip) => {
        tooltip.style.backgroundColor = "#1C1C1C";
        tooltip.style.border = "none";
      });
      sunglassesButton.style.color = "pink";
      mainTooltip.forEach((tooltip) => {
        tooltip.style.backgroundColor = "#1C1C1C";
        tooltip.style.color = "#eed994";
        tooltip.style.border = "1px solid #eed994";
      });
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
