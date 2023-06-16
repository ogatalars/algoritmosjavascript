const form = document.querySelector("form");
const promo = document.querySelector("#promo");

form.addEventListener("submit", (e) => {
  const medicamento = form.medicamento.value;
  const preco = Number(form.preco.value);
  const promocao = Math.floor(preco * 2);

  promo.innerText = `Leve 2: ${medicamento} por apenas R$ ${promocao.toFixed(
    2
  )}`;
  e.preventDefault();
});
