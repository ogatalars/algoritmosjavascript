const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const erros = [];
const sorteado = Math.floor(Math.random() * 100) + 1;
const chances = 6;

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inNumero.value);
  if (numero == sorteado) {
    respDica.innerText = `Parabéns! Você acertou o número ${sorteado}!`;
    frm.btSubmit.disabled = true;
    frm.btNovo.className = "exibe";
  } else {
    if (erros.includes(numero)) {
      alert(`Você já tentou o número ${numero}!`);
    } else {
      erros.push(numero);
      const numErros = erros.length;
      const numChances = chances - numErros;
      respErros.innerText = `Erros: ${erros.join(", ")}`;
      respChances.innerText = `Chances: ${numChances}`;
      if (numChances == 0) {
        alert(`Suas chances acabaram! O número sorteado era ${sorteado}!`);
        frm.btSubmit.disabled = true;
        frm.btNovo.className = "exibe";
        respDica.innerText = `Fim de jogo!`;
      } else {
        const dica = numero > sorteado ? "alto" : "baixo";
        respDica.innerText = `Dica: tente um número mais ${dica}!`;
      }
    }
  }

  frm.inNumero.value = "";
  frm.inNumero.focus();
});
// Esse monte de if poderia ser trocado por variaveis
