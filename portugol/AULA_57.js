console.log('--------------------------------');
console.log('----------- Aula 57 ------------');
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

  // Var
  // x, y : inteiro

  let x = 0;
  let y = 0;

  // escreval ("Digite dois numeros:")
  // leia (x)
  // leia (y)

  console.log('Digite dois numeros:');
  x = parseInt(await leia());
  y = parseInt(await leia());

  // enquanto x <> y faca
  // se x < y entao
  // escreval("DECRESCENTE!")
  // senao
  // escreval("CRESCENTE! ")
  // fimse

  while (x != y) {
    if (x < y) {
      console.log('CRESCENTE!');
    } else {
      console.log('DECRESCENTE!');
    }

    // escreval ("Digite outros dois numeros:")
    // leia (x)
    // leia (y)

    console.log('Continuar comparando? (S/n)');
    if ((await leia()) == 'n') break;

    console.log('Digite outros dois numeros:');
    x = parseInt(await leia());
    y = parseInt(await leia());
  }

  console.log('Fim do programa');
};
main();
