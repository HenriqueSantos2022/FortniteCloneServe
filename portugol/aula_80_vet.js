console.log('--------------------------------');
console.log('------ Aula 80 VETORES ---------');
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
  // N, i, j : inteiro
  // MaiorE : real
  // matriz : vetor [0..4, 0..4] de real

  let N = 0;
  let i = 0;
  let j = 0;
  let MaiorE = 0;
  let matriz = [[], []];

  // escreval("Qual a ordem da matriz? ")
  // leia(N)
  // para i de 0 ate N-1 faca
  // para j de 0 ate N-1 faca
  // escreva("Elemento[", i, ",", j,"]:"
  // leia(mat[i, j])
  // fimpara
  // fimpara

  console.log('Qual a ordem da matriz? ');
  N = parseInt(await leia());
  for (let i = 0; i <= N - 1; i++) {
    for (let j = 0; j <= N - 1; j++) {
      console.log('Elemento[', i, ',', j, ']:');
      matriz[i][j] = parseInt(await leia());
    }
  }
  // escreval("MAIOR ELEMENTO DE CADA LINHA: ")
  // para i de 0 ate N-1 faca
  // MaiorE <- mat[i, 0]
  //  para j de 1 ate N-1 faca
  //  se mat[i, j] > MaiorE entao
  //  MaiorE <- mat[i, j]
  //  fimse
  //  fimpara

  console.log('MAIOR ELEMENTO DE CADA LINHA: ');
  for (let i = 0; i < N - 1; i++) {
    MaiorE = matriz[(i, 0)];
    for (let j = 0; j < N - 1; j++) {
      if (matriz[i][j] > MaiorE) {
        MaiorE = matriz[i][j];
      }
    }
  }
  console.log(MaiorE);
  console.table(matriz);
  console.log('Fim do Programa!!!');
};
main();
