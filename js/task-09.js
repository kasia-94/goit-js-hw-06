function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const changeColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  changeColor.textContent = getRandomHexColor();
});
