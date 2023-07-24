const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", function (e) {
  e.preventDefault();
  const num = Number(frm.num.value);
  let estrelas = "";
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      estrelas += "*";
    } else {
      estrelas += "-";
    }
  }
  resp.innerText = estrelas;
});
