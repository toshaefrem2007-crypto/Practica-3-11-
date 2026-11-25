const textInput = document.querySelector(".text-input");
const colorSelect = document.querySelector(".color-select");
const card = document.querySelector(".card");

textInput.addEventListener("input", () => {
  card.textContent = textInput.value;
});

textInput.addEventListener("focus", () => {
  textInput.classList.add("focused");
});

textInput.addEventListener("blur", () => {
  textInput.classList.remove("focused");
});

colorSelect.addEventListener("change", () => {
  card.style.backgroundColor = colorSelect.value;
});
