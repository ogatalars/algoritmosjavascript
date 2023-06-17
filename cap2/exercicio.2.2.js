const form = document.querySelector("form");
const pagar = document.querySelector("#pagar");

form.addEventListener("submit", (e) => {
  const valorPreco = Number(form.valor.value);
  const tempo = Number(form.tempo.value);
  const tempoValor = Math.ceil(tempo / 15) * valorPreco;
  console.log(valorPreco);
  pagar.innerText = tempoValor;
  e.preventDefault();
});
