console.log('--------------------------------');
console.log('----------- Aula 60 ------------');
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

  /* /Var
N,i, resultado: inteiro/ */
  let N = 0;
  let i = 0;
  let resultado = 0;

  // screval ("Deseja a tabuada para qual valor?")
  // leia (N)
  console.log('Deseja a tabuada para qual valor?');
  N = parseInt(await leia());

  //  para i de 1 ate 10 faca
  //  resultado <- N * i
  //  escreval(N, " x ",i, " = ", resultado)
  //  fimpara

  for (i = 0; i <= 10; i++) {
    resultado = N * i;
    console.log(N, ' x ', i, ' = ', resultado);
  }
};
main();
