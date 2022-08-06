function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = input.value;
  for (let i = 0; i < amount; i += 1) {
    let boxElement = document.createElement("div");
    let sizeBox = 30 + (boxes.children.length - 1) * 10;
    boxElement.style.width = String(sizeBox) + "px";
    boxElement.style.height = String(sizeBox) + "px";
    boxElement.style.backgroundColor = getRandomHexColor();
    boxes.append(boxElement);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}
