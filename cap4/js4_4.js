const form = document.querySelector("form");
const resposta = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const horaBrasil = Number(form.inHoraBrasil.value);
  let horaFranca = horaBrasil + 5;
  if (horaFranca > 24) horaFranca -= 24;

  resposta.innerText = `Hora na França: ${horaFranca}h`;
});
