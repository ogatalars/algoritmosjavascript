console.log("Digite 0 para sair ");
do {
  const num = Number(prompt("Número: "));
  if (num === 0 || isNaN(num)) {
    const sair = confirm("Deseja sair?");
    if (sair) {
      break;
    } else {
      continue;
    }
  }
  if (num % 2 === 0) {
    alert(`O dobro do ${num} é ${num * 2}`);
  } else {
    alert(`O triplo do ${num} é ${num * 3}`);
  }
} while (true);
console.log("Fim do programa");
