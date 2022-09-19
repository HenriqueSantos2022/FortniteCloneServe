console.log('--------------------------------');
console.log('----------- Aula 61 ------------');
console.log('-------------------------------- \n');

// LENDO DADOS DO TERMINAL
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const leia = (function () {
  const getLineGen = (async function* () {
    for await (const line of rl) {
      yield line;
    }
  }());
  return async () => (await getLineGen.next()).value;
}());

// USANDO MAIN PARA USAR ASYNC
const main = async () => {
  // PROGRAMAR AQUI
};
// Var
// x, y, i, troca, soma : inteiro

let x = 0;
let y = 0;
const i = 0;
let troca = 0;
let soma = 0;

// escreval ("Digite dois Numeros: ")
// leia (x)
// leia (y)
// main();

console.log('Digite dois Numeros: ');
x = await leia();
y = await leia();

// se x > y entao
// troca <- x
// x <- y
// y <- troca
// fimse

if (x > y) {
  troca = x;
  x = y;
  y = troca;
}

// soma <- 0
// para i de x+1 ate y-1 faca
// se i % 2 <> 0 entao
// soma <- soma + i
// fimse
// fimpara

soma = 0;
for (let i = x + 1; i < y; i++) {
  if (i % 2 != 0) {
    soma += 1;
  }
}
// escreval ("SOMA DOS IMPARES = ", soma)
console.log('SOMA DOS IMPARES =', soma);
main();
