const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colorText = document.querySelector(".color");

function getRandomHexColor() {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hex.length);
    hexColor += hex[randomIndex];
  }

  return hexColor;
}

btn.addEventListener("click", function () {
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
});