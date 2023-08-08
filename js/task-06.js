const inputField = document.querySelector("#validation-input");
const inputFieldData = inputField.dataset.length;

inputField.addEventListener("blur", onBlur);

function onBlur(event) {
  event.currentTarget.value.length == inputFieldData
    ? (inputField.classList = "valid")
    : (inputField.classList = "invalid");
}
