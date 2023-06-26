const form = document.querySelector("form");
const podeOuNao = document.querySelector("#podeOuNaoPodeFormar");
const tipo = document.querySelector("#tipoTriangulo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const ladoA = form.ladoA.value;

  const ladoB = form.ladoB.value;
  const ladoC = form.ladoC.value;

  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    podeOuNao.innerHTML = "Não pode formar um triângulo";
    tipo.innerHTML = "";
  } else if ((ladoA == ladoB) == ladoC) {
    podeOuNao.innerHTML = "Pode formar um triângulo";
    tipo.innerHTML = "Triângulo Equilátero";
  } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    podeOuNao.innerHTML = "Pode formar um triângulo";
    tipo.innerHTML = "Triângulo Isósceles";
  } else if ((ladoA != ladoB) != ladoC) {
    podeOuNao.innerHTML = "Pode formar um triângulo";
    tipo.innerHTML = "Triângulo Escaleno";
  }
});
