const form = document.querySelector(".product-form");
const nameInput = document.querySelector(".name-input");
const weightInput = document.querySelector(".weight-input");
const distanceInput = document.querySelector(".distance-input");
const errorMessage = document.querySelector(".error");
const tableBody = document.querySelector(".product-table tbody");

function isValidName(name) {
  return /[A-Za-zА-Яа-яЁё]/.test(name);
}

function calculateCost(weight, distance) {
  return (weight * distance) / 10;
}

function createCell(text) {
  const cell = document.createElement("td");
  cell.textContent = text;
  return cell;
}

function addProductRow(name, weight, distance) {
  const cost = calculateCost(weight, distance);
  const row = document.createElement("tr");

  row.appendChild(createCell(name));
  row.appendChild(createCell(weight));
  row.appendChild(createCell(distance));
  row.appendChild(createCell(`${cost.toFixed(2)} руб.`));

  tableBody.appendChild(row);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const weight = +weightInput.value;
  const distance = +distanceInput.value;

  if (!isValidName(name)) {
    errorMessage.textContent = "Введите корректное название товара";
    return;
  }

  if (!(weight > 0)) {
    errorMessage.textContent = "Вес должен быть положительным числом";
    return;
  }

  if (!(distance > 0)) {
    errorMessage.textContent = "Расстояние должно быть положительным числом";
    return;
  }

  errorMessage.textContent = "";
  addProductRow(name, weight, distance);
  form.reset();
  nameInput.focus();
});
