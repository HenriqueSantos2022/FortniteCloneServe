console.log('--------------------------------');
console.log('----------- Aula 66 ------------');
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

  // X, N, dentro, fora  : inteiro

  let X = 0;
  let N = 0;
  let dentro = 0;
  let fora = 0;

  // N <- 0
  // X <- 0

  // escreval ("Quantos numeros voce vai digitar? ")
  // leia (N)
  console.log('Quantos numeros voce vai digitar?');
  N = await leia();

  // para i de 1 ate N
  for (let i = 0; (i = N); i++) {
    // escreva("Digite um numero:")
    // leia (X)
    console.log('Digite um numero:');
    X = await leia();

    // se (X >= 10) e (X <= 20) entao
    // dentro <- dentro + 1
    // senao
    // fora <- fora + 1
    // fimse
    if (X >= 10 && X <= 20) {
      dentro += 1;
    } else {
      X < 10 && X > 20;
      fora += 1;

      // escreval (dentro, "DENTRO")
      // escreval (fora, "FORA")
      console.log('DENTRO', dentro);
      console.log('FORA', fora);
    }
  }
};

main();
