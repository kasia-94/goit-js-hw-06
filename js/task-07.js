const text = document.querySelector("#text");
const fontSizeContol = document.querySelector("#font-size-control");

fontSizeContol.addEventListener("input", changeSize);

function changeSize(event) {
  text.style.fontSize = fontSizeContol.value + "px";
  console.log(text.style.fontSize);
}
