const form = document.querySelector("form");
const resposta = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(form.inNumero.value);
  let raizQuadrada = Math.sqrt(numero);
  if (Number.isInteger(raizQuadrada)) {
    resposta.innerText = `Raiz quadrada de ${numero} = ${raizQuadrada}`;
  } else {
    resposta.innerText = `Não há raiz quadrada exata para ${numero}`;
  }
});
