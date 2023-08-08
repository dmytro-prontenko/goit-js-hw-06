const rangeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rangeControl.addEventListener("input", onInput);

function onInput(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
