// cria referências aos elementos da página
const fmr = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria um evento para o botão
fmr.addEventListener("submit", (e) => {
  const veiculo = fmr.inVeiculo.value; // obtem o valor do campo veiculo
  const preco = Number(fmr.inPreco.value); // obtem o valor do campo preco
  const entrada = preco * 0.5; // calcula a entrada
  const parcelas = (preco * 0.5) / 12; // calcula o valor das parcelas

  resp1.innerText = `Promoção de ${veiculo}`; // exibe o nome do veiculo
  resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`; // exibe o valor da entrada
  resp3.innerText = `+ 12x de R$ ${parcelas.toFixed(2)}`; // exibe o valor das parcelas
});
