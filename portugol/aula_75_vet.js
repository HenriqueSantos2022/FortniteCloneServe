console.log('--------------------------------');
console.log('------ Aula 75 VETORES ---------');
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
  // M, N, i, j : inteiro
  // matA : vetor [0..4, 0..4] de inteiro
  // matB : vetor [0..4, 0..4] de inteiro
  // matC : vetor [0..4, 0..4] de inteiro

  let M = 0;
  let N = 0;
  let i = 0;
  let j = 0;

  let matA = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  let matB = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  let matC = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  // escreval("Quantas linhas vai ter cada matriz? ")
  // leia(m)
  // escreval("Quantas colunas vai ter cada matriz?")
  // leia(N)

  console.log('Quantas linhas vai ter cada matriz?');
  M = parseInt(await leia());
  console.log('Quantas colunas vai ter cada matriz?');
  N = parseInt(await leia());

  // escreval("Digite os valores da matriz A" )
  // para i de 0 ate M-1 faca
  // para j de 0 ate N-1 faca
  // escreval("Elemento, [", i, ",", j, "]: ")
  // leia(matA[i, j])
  // fimpara
  // fimpara

  console.log('Digite os valores da matriz A');
  matA[i][j] = parseInt(await leia());
  for (let i = 0; i <= M - 1; i++) {
    for (let j = 0; j <= N - 1; j++) {
      console.log('Elemento, [', i, ',', j, ']: ');
      matA[i][j] = parseInt(await leia());
    }
  }
  // escreval("Digite os valores da matriz B" )
  // para i de 0 ate M-1 faca
  // para j de 0 ate N-1 faca
  // escreval("Elemento, [", i, ",", j, "]: ")
  // leia(matB[i, j])
  // fimpara
  // fimpara

  console.log('Digite os valores da matriz B');
  matB[i][j] = parseInt(await leia());
  for (let i = 0; i <= M - 1; i++) {
    for (let j = 0; j <= N - 1; j++) {
      console.log('Elemento, [', i, ',', j, ']:');
      matB[i][j] = parseInt(await leia());
    }
  }

  // para i de 0 ate M-1 faca
  // para j de 0 ate N-1 faca
  // matC[i, j] <- matA[i, j] +  matB[i, j]
  // fimpara
  // fimpara

  for (let i = 0; i <= M - 1; i++) {
    for (let j = 0; j <= N - 1; j++) {
      matC[i][j] = matA[i][j] + matB[i][j];

      for (let i = 0; i <= M - 1; i++) {
        for (let j = 0; j <= N - 1; j++) {
          console.log('MATRIZ SOMA =', matC[i][j]);
        }
      }

      log.table(matA);
      log.table(matB);
      log.table(matC);
    }
  }

  // escreval("MATRIZ SOMA:")
  // para i de 0 ate M-1 faca
  // para j de 0 ate N-1 faca
  // escreva(matC[i, j], " ")
  // fimpara
  // escreval

  console.log('Fim do Programa');
};

main();
