const prompt = require("prompt-sync")(); // adiciona o pacote 'prompt-sync' ao código (entrada de dados)
const veiculo = prompt("Digite o tipo de veículo: "); // entrada de dados
const preco = prompt("Digite o preço do veículo: "); // entrada de dados
const entrada = preco * 0.5;
const parcela = (preco * 0.5) / 12;
console.log(
  `Promoção de R$ ${preco} para R$ ${entrada} à vista ou 12x de R$ ${parcela}`
);
