function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
const color = document.querySelector(".color");

changeColor.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
});