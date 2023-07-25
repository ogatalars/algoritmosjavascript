const prompt = require("prompt-sync")();
const valor = Number(prompt("Digite um valor: "));
const num = Number(prompt("Número de parcelas: "));
const valorParcelas = Math.floor(valor / num);
const valorFinal = valorParcelas + (valor % num);
for (let i = 1; i < num; i++) {
  console.log(`${valorParcelas} + `);
}
console.log(`${valorFinal}`);
