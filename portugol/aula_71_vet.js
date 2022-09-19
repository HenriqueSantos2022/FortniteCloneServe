console.log('--------------------------------');
console.log('----------- Aula 71 Vetor ------------');
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

  // N, i : inteiro
  // QuantPares : inteiro
  // Vet : vetor [0..6] de inteiro

  let n = 0;
  let i = 0;
  let QuantPares = 0;
  const vetor = [];

  // escreval ("Quantos numeros voce vai digitar?")
  // leia (N)
  // para i de 0 ate N-1 faca
  // escreval ("Digite um numero:")
  // leia (Vet [i])
  // fimpara

  console.log('Quantos numeros voce vai digitar?');
  n = parseInt(await leia());
  for (i = 0; i < n; i++) {
    console.log('Digite um numero:');
    vetor[i] = parseInt(await leia());
  }
  // escreval ("NUMEROS PARES: ")
  // para i de 0 ate N-1 faca
  // se vet[i] % 2 = 0 entao
  //    escreva (vet[i], " ")
  //    QuantPares <- QuantPares + 1
  //    fimse
  // fimpara

  //  escreval
  //  escreval
  //  escreval ("QUANTIDADE DE PARES = ", QuantPares)

  console.log('NU MEROS PARES: ');
  for (i = 0; i < n; i++) {
    if (vetor[i] % 2 == 0) {
      console.log(vetor[i]);
      QuantPares++;
    }
  }
  console.log('QUANTIDADE DE PARES = ', QuantPares);
  console.log();
  console.log('Fim do Programa');
};

main();
