const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  let numChinchilas = Number(frm.numChin.value);
  const numAnos = Number(frm.numAnos.value);
  for (let i = 1; i < numAnos; i++) {
    numChinchilas *= 3;
  }
  
  resp.innerHTML = `O número de chinchilas após ${numAnos} anos é ${numChinchilas}`;
});
