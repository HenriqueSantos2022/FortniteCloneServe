console.log('--------------------------------');
console.log('----------- Aula 70 ------------');
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

 f : real

Inicio

   escreval ("Digite o valor de N: ")
   leia (n)

   f <- 1

    para i de 1 ate n faca
     f <- f * i

fimpara

     escreval ("FATORIAL =", f)
  / */

  let n;
  let f;

  console.log('Digite o valor de N:');
  n = await leia();

  f = 1;

  for (let i = n; i > 0; i--) {
    f *= i;
    console.log('FATORIAL =', f);
  }
};

main();
