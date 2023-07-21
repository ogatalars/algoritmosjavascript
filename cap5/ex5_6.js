const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", function (e) {
  e.preventDefault();
  const num = Number(frm.inNumero.value);
  let numDivisores = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      numDivisores++;
    }
  }
  if (numDivisores == 2) {
    resp.textContent = `${num} é primo`;
  } else {
    resp.textContent = `${num} não é primo`;
  }
});
