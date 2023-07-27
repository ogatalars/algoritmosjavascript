const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];

frm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = frm.inPaciente.value;
  pacientes.push(nome);
  let lista = "";
  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1} - ${pacientes[i]}\n`;
  }
  respLista.innerText = lista;
  frm.inPaciente.value = "";
  frm.inPaciente.focus();
});

frm.btUrgencia.addEventListener("click", function () {
  if (!frm.checkValidity()) {
    alert("Informe o nome do paciente a ser atendido em caráter de urgencia");
    frm.inPaciente.focus();
    return;
  }
  const nome = frm.inPaciente.value;
  pacientes.unshift(nome);
  let lista = "";
  pacientes.forEach((paciente, i) => {
    lista += `${i + 1} - ${paciente}\n`;
  });
  respLista.innerText = lista;
  frm.inPaciente.value = "";
  frm.inPaciente.focus();
});

frm.btAtender.addEventListener("click", function () {
  if (pacientes.length == 0) {
    alert("Não há pacientes na fila de espera");
    frm.i;
    return;
  }
  const atender = pacientes.shift();
  respNome.innerText = atender;
  let lista = "";
  pacientes.forEach((paciente, i) => {
    lista += `${i + 1} - ${paciente}\n`;
  });
  respLista.innerText = lista;
});
