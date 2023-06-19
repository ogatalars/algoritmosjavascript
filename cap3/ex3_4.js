const prompt = require("prompt-sync")();
const pesoKg = Number(prompt("Digite o peso em Kg: "));
const consumoDiario = Number(prompt("Digite o consumo diário em gramas: "));
const sobra = pesoKg % consumoDiario;
console.log(`Sobra: ${sobra} gramas`);
console.log(`Duração: ${Math.floor(pesoKg / consumoDiario)} dias`);
