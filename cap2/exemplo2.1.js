// cria referencia ao form e ao elemento h3(onde será exibida a resposta )
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria um ouvinte de evento, acionado quando o botão submit é clicado

frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value; // obtem o nome digitado
  resp.innerText = `Olá ${nome}!`; // exibe a resposta no elemento h3
  e.preventDefault(); // impede que o form seja submetido
});
