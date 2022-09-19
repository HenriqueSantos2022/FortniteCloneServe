console.log('--------------------------------');
console.log('----------- Aula 67 ------------');
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

  // n, x, i : inteiro
  // escreva("Quantos numeros voce ira digitar? ")
  // leia (n)
  // para i de 1 ate n faca
  // escreval ("Digite um numero: ")
  // leia (x)
  // se x = 0 entao
  // escreval ("NULO")
  // senao
  // se x % 2 = 0 entao
  // se x < 0 entao
  // escreval ("PAR NEGATIVO")
  // enao
  // escreval ("PAR POSITIVO")

  let n;
  let x;

  console.log('Quantos numeros voce ira digitar?');
  n = await leia();

  for (let i = 0; i < n; i++) {
    console.log('Digite um numero:');
    x = await leia();

    if (x == 0) {
      console.log('VALOR NULO');
    } else if (x % 2 == 0) {
      console.log('PAR');
    } else {
      console.log('IMPAR');
      if (x > 0) {
        console.log('POSITIVO');
      } else {
        console.log('NEGATIVO');
      }
    }
  }
};
main();
