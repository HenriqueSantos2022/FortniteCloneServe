console.log('--------------------------------');
console.log('------ Aula 76 VETORES ---------');
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
  // Mat : vetor [0..5, 0..5] de real
  // vetSoma : vetor [0..5] de real
  // M, N, i, j : inteiro

  let Matriz = [
    [0, 0, 0],
    [0, 0, 0],
  ];

  let vetorSoma = [0, 1, 2, 3, 4];
  let M = 0;
  let N = 0;
  let i = 0;
  let j = 0;

  // escreval("Qual a quantidade de linhas da matriz?")
  // leia(M)
  // escreval("Qual a quantidade de colunas da matriz?")
  // leia(N)

  console.log('Qual a quantidade de linhas da matriz?');
  M = parseInt(await leia());

  console.log('Qual a quantidade de colunas da matriz?');
  N = parseInt(await leia());

  // para i de 0 ate M-1 faca
  // escreval("Digite os elementos da", i+1, " linha: ")
  // para j de 0 ate N-1 faca
  // leia(Mat[i, j])

  for (let i = 0; i <= M - 1; i++) {
    console.log('Digite os elementos da', i + 1, ' linha: ');
    for (let j = 0; j < N - 1; j++) {
      Matriz[i][j] = parseInt(await leia());
    }
  }

  // fimpara
  // fimpara
  // para i de 0 ate M-1 faca
  // vetSoma[i] <- 0
  // para j de 0 ate N-1 faca
  // vetSoma[i] <- vetSoma[i] + Mat[i, j]
  // fimpara
  // fimpara

  for (let i = 0; i <= M - 1; i++) {
    vetorSoma[i] = 0;
    for (let j = 0; j <= N - 1; j++) {
      vetorSoma[i] = vetorSoma[i] + Matriz[i][j];
    }
  }

  // escreval("VETOR GERADO: ")
  // para i de 0 ate M-1 faca
  // escreval(vetSoma[i]:3:2)
  // fimpara

  console.table(Matriz);

  console.log('VETOR GERADO: ');
  for (let i = 0; i < M - 1; i++) {
    console.log(vetorSoma[i]);
  }

  console.log('Fim do Programa');
};

main();
