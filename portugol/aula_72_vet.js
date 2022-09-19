console.log('--------------------------------');
console.log('----------- Aula 72 VETORES ------------');
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
  // N, i, posMaior: inteiro
  // vet : vetor [0..5] de real
  // maiorValor: real

  let N = 0;
  let posMaior = 0;
  let i = 0;
  let vetor = [];
  let maiorValor = 0;

  // escreval ("Quanto numeros voce vai digitar? ")
  // leia (N)
  // para i de 0 ate N-1 faca
  // escreval ("Digite um numero: ")
  // leia (vet[i])
  // fimpara

  console.log('Quanto numeros voce vai digitar?');
  N = parseInt(await leia());

  for (i = 0; i < N; i++) {
    console.log('Digite um numero: ');
    vetor[i] = parseInt(await leia());
  }

  // maiorValor <- vet [0]
  // posMaior <- 0
  // para i de 0 ate N-1 faca
  // se vet[i] > maiorValor entao
  // maiorValor <- vet[i]
  // posMaior <- i
  // fimse
  // fimpara

  maiorValor = vetor[0];
  posMaior = 0;

  for (i = 0; N < i; i++) {
    if (vetor[i] > maiorValor) {
      maiorValor = vetor[i];
      posMaior = i;
    }
  }

  // escreval ("MAIOR VALOR = ", maiorValor:4:2)
  // escreval ("POSICAO DO MAIOR VALOR = ", posMaior)

  console.log('MAIOR VALOR = ', maiorValor);
  console.log('POSICAO DO MAIOR VALOR = ', posMaior);
  console.log();
  console.log('Fim do Programa');
};

main();
