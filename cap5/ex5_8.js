const prompt = require("prompt-sync")();
console.log("Programa anos de copa do mundo. Digite 0 para sair.");
do {
  const ano = Number(prompt("Digite um ano: "));
  if (ano == 0) {
    break;
  } else if (ano == 1942 || ano == 1946) {
    console.log("Não houve copa do mundo nesse ano.");
  } else if (ano >= 1930 && ano % 4 == 2) {
    console.log(`O ano ${ano} é ano de copa do mundo.`);
  } else {
    console.log("Não é ano de copa");
  }
} while (true);
