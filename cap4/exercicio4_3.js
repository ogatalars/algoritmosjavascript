const form = document.querySelector("form");
const tempo = document.querySelector("#tempo");
const troco = document.querySelector("#troco");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const valor = Number(form.valor.value);
  if (valor <= 1 && valor >= 0.1) {
    tempo.innerHTML = "30 minutos";
    troco.innerHTML = "Troco: R$ " + (valor - 1);
  } else if (valor <= 1.75) {
    tempo.innerHTML = "60 minutos";
    troco.innerHTML = "Troco: R$ " + (1.75 - valor).toFixed(2);
  } else if (valor <= 3) {
    tempo.innerHTML = "120 minutos";
    troco.innerHTML = "Troco: R$ " + (3 - valor).toFixed(2);
  }
});
