const totalElement = document.querySelector("#total");
const resetButton = document.querySelector("#reset");

document.addEventListener("click", function (event) {

  // Ajouter
  if (event.target.classList.contains("btn")) {

    const article = event.target.closest("article");
    const valueElement = article.querySelector(".value");

    let value = parseInt(valueElement.textContent);
    value++;

    valueElement.textContent = value;

    recalculerTotal();
  }

  // click reset
  if (event.target.id === "reset") {
    remettreAZero();
  }

});

function recalculerTotal() {

  const values = document.querySelectorAll(".value");

  let i = 0;
  let total = 0;

  while (i < values.length) {
    total += parseInt(values[i].textContent);
    ++i;
  }

  totalElement.textContent = total;
}

function remettreAZero() {

  const values = document.querySelectorAll(".value");

  let i = 0;

  while (i < values.length) {
    values[i].textContent = 0;
    ++i;
  }

  totalElement.textContent = 0;
}