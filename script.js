function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

function randomHue() {
  const r = randomNumber(256);
  const b = randomNumber(256);
  const g = randomNumber(256);
  return "rgb(" + r + ", " + b + ", " + g + ")";
}

function newGrid() {
  // Reset Grid
  document.querySelector(".grid-container").innerHTML = "";

  const gridContainer = document.querySelector(".grid-container");

  // Prompt size & ensure size is 100*100 or less
  let gridSize = prompt("Grid Size:");
  if (Number(gridSize) <= 100) {
    gridSize = Number(gridSize);
  } else {
    alert("you can't use this size");
    return;
  }

  // Adds the size as a variable in CSS
  gridContainer.style.setProperty("--size", gridSize);

  // Creates the div, making it a grid item and adding a mouseover event to give the sketch effect, then adding it to the grid container.
  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");

    div.classList.add("grid-item");

    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = randomHue();
    });

    gridContainer.appendChild(div);
  }
}

document.querySelector("button").onclick = newGrid;
