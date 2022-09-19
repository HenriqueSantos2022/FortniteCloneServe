console.log('--------------------------------');
console.log('----------- Aula 69 ------------');
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

  /* /
  Var

n, i : inteiro

x, y, divisao : real

Inicio

 escreval ("Quantos casos voce ira digitar? ")
 leia (n)

 para i de 1 ate n faca

    escreval ("Digite um numeredor: ")
    leia (x)
    escreval ("Digite um denominador: ")
    leia (y)

    se y = 0 entao
       escreval ("Impossivel calcular tente outro N: ")
    senao
       divisao <- x / y
        escreval ("Divisao =", divisao)
 / */

  let n;
  let x;
  let y;
  let divisao;

  console.log('Quantos casos voce ira digitar?');
  n = await leia();

  for (let i = 0; i < n; i++) {
    console.log('Digite um numeredor: ');
    x = await leia();

    console.log('Digite um denominador: ');
    y = await leia();

    if (y == 0) {
      console.log('Impossivel calcular tente outro N: ');
    } else {
      divisao = x / y;

      console.log('DIVISAO =', divisao);
    }
  }
};

main();
