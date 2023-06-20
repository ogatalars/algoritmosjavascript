const form = document.querySelector("form"); // Seleciona o formulário
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

form.addEventListener("submit", (e) => {
  const nomeAluno = form.inNome.value;
  const nota1 = Number(form.inNota1.value);
  const nota2 = Number(form.inNota2.value);
  const media = (nota1 + nota2) / 2;
  if (media >= 6) {
    resp1.textContent = `Parabéns ${nomeAluno}! Você foi aprovado(a)!`;
    resp2.textContent = `Sua média foi ${media.toFixed(1)}`;
  } else {
    resp1.textContent = `Que pena ${nomeAluno}! Você foi reprovado(a)!`;
    resp2.textContent = `Sua média foi ${media.toFixed(1)}`;
  }
  e.preventDefault();
});
