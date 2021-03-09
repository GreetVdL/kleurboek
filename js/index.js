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

// call filter functions when DOM loaded

window.addEventListener("DOMContentLoaded", () => {
  filterGirls();
  filterBoys();
  filterBoth();
  filterKids();
});
