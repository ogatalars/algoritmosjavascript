const frm = document.querySelector("form");
const resp = document.querySelector("pre");

function clearResponse() {
    resp.innerHTML = '';
  }
  

frm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const fruta = frm.fruta.value;
  const qtd = Number(frm.num.value);
  for (let i = 0; i < qtd; i++) {
  resp.innerHTML += `${i} ${fruta}\n`;
  }
});

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearResponse);
