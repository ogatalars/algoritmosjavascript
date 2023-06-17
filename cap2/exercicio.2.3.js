const formulario = document.querySelector("form");
const produtoPromo = document.querySelector("#promo1");
const terceiroProduto = document.querySelector("#terceiroItemPromo");

formulario.addEventListener("submit", (e) => {
  const nomeProduto = formulario.produto.value;
  const precoProduto = Number(formulario.preco.value);
  const promocao = precoProduto * 0.5;
  const tresProdutos = precoProduto * 3 - promocao;

  produtoPromo.innerText = `${nomeProduto} - Promoção: leve 3 por R$ ${tresProdutos.toFixed(
    2
  )}`;
  terceiroProduto.innerText = `O 3º produto custa apenas R$ ${promocao.toFixed(
    2
  )}`;
  e.preventDefault();
});
