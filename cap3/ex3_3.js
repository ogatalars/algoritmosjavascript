const prompt = require("prompt-sync")(); // adiciona o pacote 'prompt-sync' ao código (entrada de dados)
const salario = Number(prompt("Digite o salário: ")); // entrada de dados
const tempoDeTrabalho = Number(prompt("Digite o tempo de trabalho: ")); // entrada de dados
const quadrienios = Math.floor(tempoDeTrabalho / 4); // calcula o número de quadriênios[]
const acrescimento = (salario * quadrienios) / 100;
console.log(`Quadrienios: ${quadrienios}`);
console.log(`Salário Final: ${salario + acrescimento}`);
