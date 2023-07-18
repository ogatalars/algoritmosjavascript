const formulario = document.querySelector("form");
const resp = document.querySelector("pre");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const numero = Number(formulario.inNumero.value);
  let resposta = "";
  for (let i = 1; i <= 10; i++) {
    //resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
    resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`;
  }
  resp.innerText = resposta;
});
