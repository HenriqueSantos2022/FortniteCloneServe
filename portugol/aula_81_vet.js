console.log('--------------------------------');
console.log('------ Aula 81 VETORES ---------');
console.log('-------------------------------- \n');

// LENDO DADOS DO TERMINAL
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const leia = (function () {
  const getLineGen = (async function* () {
    for await (const line of rl) {
      yield line;
    }
  })();
  return async () => (await getLineGen.next()).value;
})();

// USANDO MAIN PARA USAR ASYNC
const main = async () => {
  // PROGRAMAR AQUI

  // Var

  // N, i : inteiro
  // vetA : vetor [0..6] de inteiro
  // vetB : vetor [0..6] de inteiro
  // VetC : vetor [0..6] de inteiro

  let N = 0;
  let i = 0;
  let vetA = [0, 1, 2, 3, 4, 5];
  let vetB = [0, 1, 2, 3, 4, 5];
  let vetC = [0, 1, 2, 3, 4, 5];

  //   Inicio

  // escreval ("Quantos valores vai ter cada vetor?")
  // leia(N)

  //    escreval("Digite os valores do vetor A: ")
  //    para i de 0 ate N-1 faca
  //    leia(vetA [i])
  // fimpara
  //   escreval("Digite os valores do vetor B: ")
  //   para i de 0 ate N-1 faca
  //   leia(vetB [i])
  // fimpara

  console.log('Quantos valores vai ter cada vetor?');
  N = await leia();

  console.log('Digite os valores do vetor A: ');
  vetA[i] = parseInt(await leia());
  for (let i = 0; i <= N - 1; i++) {
    vetA[i];

    console.log('Digite os valores do vetor B: ');
    vetB[i] = parseInt(await leia());
    for (let i = 0; i <= N - 1; i++) {
      vetB[i];
    }
  }

  //   para i de 0 ate N-1 faca
  //   vetC [i] <- vetA[i] + vetB[i]
  // fimpara
  //   escreval("VETOR RESULTANTE: ")
  // para i de 0 ate N-1 faca
  //  escreval(vetC [i])
  // fimpara

  for (let i = 0; i <= N - 1; i++) {
    vetC[i] = vetA[i] + vetB[i];
  }
  console.log('VETOR RESULTANTE: ');
  for (let i = 0; i <= N - 1; i++) {
    console.log(vetC[i]);
  }
  // console.log(vetA);
  // console.log(vetB);
  // console.log(vetC);
  console.log('Fim do Programa!!!');
};
main();
