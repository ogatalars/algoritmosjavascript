const form = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");
const resp3 = document.querySelector("#resp3");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const valorSaque = Number(form.inSaque.value);
  if (valorSaque % 10 !== 0) {
    alert("Valor inválido");
    form.inSaque.focus();
    return;
  }
  const notasCem = Math.floor(valorSaque / 100);
  let resto = valorSaque % 100;
  const notasCinquenta = Math.floor(resto / 50);
  resto = resto % 50;
  const notaDez = Math.floor(resto / 10);
  if (notasCem > 0) {
    resp1.innerHTML = `${notasCem} nota(s) de R$ 100,00`;
  }
  if (notasCinquenta > 0) {
    resp2.innerHTML = `${notasCinquenta} nota(s) de R$ 50,00`;
  }
  if (notaDez > 0) {
    resp3.innerHTML = `${notaDez} nota(s) de R$ 10,00`;
  }
});
