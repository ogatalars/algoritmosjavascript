// cria a referencia ao form e ao elemento h3(onde será exibida a resposta )
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//cria um ouvinte de evento, acionado quando o botão submit é clicado

frm.addEventListener("submit", (e) => {
  const titulo = frm.inTitulo.value; // obtem o titulo digitado
  const duracao = Number(frm.inDuracao.value); // obtem a duração digitada

  const horas = Math.floor(duracao / 60); // calcula as horas
  const minutos = duracao % 60; // calcula os minutos

  resp1.innerText = titulo; // exibe o titulo no elemento h3
  resp2.innerText = `${horas}h${minutos} min`; // exibe a duração no elemento h4

  e.preventDefault(); // impede que o form seja submetido
});
