const prompt = require("prompt-sync")();
const valor = Number(prompt("Digite um valor: "));
const aux = Math.floor(valor / 20);
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;
const valorParcela = valor / parcelas;
// if(aux == 0) {parcelas = 1} else if(aux > 6) {parcelas = 6} else {parcelas = aux}
console.log(`O valor de cada parcela é R$${valorParcela.toFixed(2)}.`);
