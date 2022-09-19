console.log('--------------------------------');
console.log('----------- Aula 46 ------------');
console.log('-------------------------------- \n');

let altura = 0;
let alturaminima = 0;
let alturamaxima = 0;

console.log('Escreva Sua Altura');

altura = 90;
alturaminima = 100;
alturamaxima = 200;

console.log('Sua Altura e', altura);
if (altura < alturaminima || altura > alturamaxima) {
  console.log('Nao pode brincar');
} else {
  console.log('Pode brincar');
}

if (altura > alturaminima && altura < alturamaxima) {
  console.log('Pode brincar');
} else {
  console.log('Nao pode brincar');
}
