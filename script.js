const colors = ["red", "blue", "green", "yellow"];
const promptEl = document.getElementById("prompt");
const buttonsContainer = document.querySelector(".color-buttons");

let correctColor = "";

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function renderButtons() {
  // Clear existing buttons
  buttonsContainer.innerHTML = "";

  // Shuffle colors
  const shuffled = [...colors].sort(() => 0.5 - Math.random());

  shuffled.forEach(color => {
    const btn = document.createElement("button");
    btn.className = "color-button";
    btn.style.backgroundColor = color;
    btn.addEventListener("click", () => checkAnswer(color));
    buttonsContainer.appendChild(btn);
  });
}

function setNewRound() {
  correctColor = getRandomColor();
  promptEl.textContent = `Tap the color: ${correctColor.toUpperCase()}`;
  renderButtons();
}

function checkAnswer(selected) {
  if (selected === correctColor) {
    alert("🎉 Good job!");
    setNewRound();
  } else {
    alert("Oops! Try again.");
  }
}

// Start the game
setNewRound();
