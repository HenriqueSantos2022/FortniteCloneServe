console.log('--------------------------------');
console.log('------ Aula 77 VETORES ---------');
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

  // N, i : inteiro
  // QuantPares : inteiro
  // Vet : vetor [0..6] de inteiro

  let N = 0;
  let i = 0;
  let QuantPares = 0;
  let vetorM = [0, 1, 2, 3];

  // Inicio
  // escreval ("Quantos numeros voce vai digitar?")
  // leia (N)
  // para i de 0 ate N-1 faca
  // escreval ("Digite um numero:")
  // leia (Vet [i])
  // fimpara

  console.log('Quantos numeros voce vai digitar?');
  N = parseInt(await leia());
  for (let i = 0; i <= N - 1; i++) {
    console.log('Digite um numero:');
    vetorM[i] = parseInt(await leia());
  }

  // escreval
  // escreval ("NUMEROS PARES: ")
  // para i de 0 ate N-1 faca
  // se vet[i] % 2 = 0 entao
  // escreva (vet[i], " ")
  // QuantPares <- QuantPares + 1
  // fimse
  // fimpara

  QuantPares = 0;

  console.log('NUMEROS PARES: ');
  for (let i = 0; i <= N - 1; i++) {
    if (vetorM[i] % 2 == 0) {
      console.log(vetorM[i]);

      QuantPares = QuantPares + 1;

      //escreval ("QUANTIDADE DE PARES = ", QuantPares)
      console.log('QUANTIDADE DE NUMEROS PARES =', QuantPares);
      console.table(vetorM[i]);
      console.log('Fim do Programa!!!');
    }
  }
};

main();
