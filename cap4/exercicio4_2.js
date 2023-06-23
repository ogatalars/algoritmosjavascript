const form = document.querySelector("form");
const resposta = document.querySelector("#resposta");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const velocidadePermitida = Number(form.velocidade.value);
  const velocidadeCondutor = Number(form.velocidadeCondutor.value);
  if (velocidadeCondutor <= velocidadePermitida) {
    resposta.innerHTML = "Sem multa";
  } else if (velocidadeCondutor <= velocidadePermitida + 20) {
    resposta.innerHTML = "Multa leve";
  } else if (velocidadeCondutor > velocidadePermitida + 40) {
    resposta.innerHTML = "Multa grave";
  }
});
