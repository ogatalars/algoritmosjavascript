const form = document.querySelector("form");
const resposta = document.querySelector("#resposta");

form.addEventListener("submit", (e) => {
  const numero = Number(form.numero.value);
  const par = numero % 2 === 0;
  console.log(par);
  if (par) {
    resposta.innerHTML = "O número é par";
  } else {
    resposta.innerHTML = "O número é ímpar";
  }
  e.preventDefault();
});
