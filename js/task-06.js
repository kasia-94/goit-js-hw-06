const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  let valueInput = event.currentTarget.value;
  if (valueInput.length !== Number(textInput.dataset.length)) {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
}
