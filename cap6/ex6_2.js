const frm = document.querySelector('form');
const respErros = document.querySelector('#outErros');  
const respChances = document.querySelector('#outChances');
const respDica = document.querySelector('#outDica');

const erros = [];
const sorteado = Math.floor(Math.random() * 100) + 1;
const chances = 6

