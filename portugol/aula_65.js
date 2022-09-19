console.log('--------------------------------');
console.log('----------- Aula 65 ------------');
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

  // x, i : inteiro
  let x = 0;
  const i = 0;

  // escreva ("Digite um valor de X: ")
  // leia(x)

  console.log('Digite um valor de X:');
  x = await leia();

  for (let i = 1; i < x; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }

  // para i de 1 ate x faca
  // se i % 2 <> 0 entao
  // escreval (i)
  // fimse
  // impara
};

main();
