console.log('--------------------------------');
console.log('------ Aula 78 VETORES ---------');
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
  // N, i, soma, posMaior : inteiro
  // media : real
  // vetNome : vetor [0..5] de caractere
  // vetNota1: vetor [0..5] de real
  // vetNota2: vetor [0..5] de real

  let N = 0;
  let i = 0;
  let soma = 0;
  let posMaior = 0;
  let media = 0;
  let vetorNome = [0, 1, 2, 3, 4];
  let vetNota1 = [0, 1, 2, 3, 4];
  let vetNota2 = [0, 1, 2, 3, 4];

  //  escreval("Quantos alunos serao digitados? ")
  //  leia(N)
  //  para i de 0 ate N-1 faca
  //  escreval("Digite nome, primeira e segunda nota do", i+1, "o aluno: ")
  //  leia(vetNome[i])
  //  leia(vetNota1[i])
  //  leia(vetNota2[i])
  //  fimpara

  console.log('Quantos alunos serao digitados? ');
  N = parseInt(await leia());
  for (let i = 0; i <= N - 1; i++) {
    console.log('Digite nome, primeira e segunda nota do', i + 1, 'o aluno: ');
    vetorNome[i] = await leia();
    vetNota1[i] = parseInt(await leia());
    vetNota2[i] = parseInt(await leia());
  }

  // escreval("Alunos aprovados:")
  // para i de 0 ate N-1 faca
  // media <- (vetNota1[i] + vetNota2[i]) / 2
  // se media >= 6 entao
  // escreval(vetNome[i])
  // fimse
  // fimpara

  console.log('Alunos aprovados:');
  for (let i = 0; i <= N - 1; i++) {
    media = vetNota1[i] + vetNota2[i] / 2;
    if (media >= 6) {
      console.log(vetorNome[i]);
    }
  }

  console.log('Fim do Programa!!!');
};
main();
