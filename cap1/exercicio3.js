let valorDoProduto = Number(prompt("Digite o valor do produto: "));
let comDesconto = valorDoProduto * 0.1 - valorDoProduto;
alert(
  "O valor do produto com desconto é: " +
    comDesconto +
    "." +
    "O valor do produto sem desconto é: " +
    valorDoProduto +
    "."
);
