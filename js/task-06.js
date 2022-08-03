const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  let valueInput = event.currentTarget.value;
  if (valueInput.length !== Number(textInput.dataset.length)) {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  } else textInput.classList.remove("invalid");
  textInput.classList.add("valid");
}
