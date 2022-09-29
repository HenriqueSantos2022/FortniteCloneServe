console.log('--------------------------------');
console.log('----------- Aula 73 VETORES ------------');
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

  // N, i, j : inteiro
  // soma : inteiro
  // mat : vetor [0..4, 0..4] de inteiro

  let N,
    i,
    j,
    soma = 0;

  let matriz = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  // escreval("Qual a ordem da matriz? ")
  // leia(N)

  console.log('Qual a ordem da matriz?');
  N = parseInt(await leia());

  // para i de 0 ate N-1 faca
  //      para j de 0 ate N-1 faca
  //       escreval("Elemento[", i, ",", j, "]:")
  //       leia(mat[i, j])
  //    fimpara
  //  fimpara

  for (let i = 0; i <= N - 1; i++) {
    for (let j = 0; j <= N - 1; j++) {
      console.log('Elemento[', i, ',', j, ']:');
      matriz[i][j] = parseInt(await leia());
    }
  }
  console.table(matriz);
};

main();
