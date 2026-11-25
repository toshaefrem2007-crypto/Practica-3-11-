const form = document.querySelector(".survey-form");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const ratingInput = document.querySelector(".rating-input");
const commentsInput = document.querySelector(".comments-input");
const result = document.querySelector(".result");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Введите имя";
    return false;
  }
  nameError.textContent = "";
  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();

  if (email === "") {
    emailError.textContent = "Введите email";
    return false;
  }

  if (!emailPattern.test(email)) {
    emailError.textContent = "Введите корректный email, например name@example.com";
    return false;
  }

  emailError.textContent = "";
  return true;
}

function createRow(label, value) {
  const row = document.createElement("p");
  row.textContent = `${label}: ${value}`;
  return row;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();

  if (!isNameValid || !isEmailValid) {
    result.replaceChildren();
    return;
  }

  const gender = form.querySelector(".gender-input:checked");
  const interests = [...form.querySelectorAll(".interest-input:checked")].map((item) => item.value);
  const comments = commentsInput.value.trim();

  const title = document.createElement("h2");
  title.textContent = "Данные пользователя";

  const rows = [
    createRow("Имя", nameInput.value.trim()),
    createRow("Email", emailInput.value.trim()),
    createRow("Пол", gender ? gender.value : "не указан"),
    createRow("Оценка сервиса", ratingInput.value),
    createRow("Интересы", interests.length > 0 ? interests.join(", ") : "не выбраны"),
    createRow("Комментарии", comments !== "" ? comments : "нет")
  ];

  result.replaceChildren(title, ...rows);
});
