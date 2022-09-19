console.log('--------------------------------');
console.log('----------- Aula 63 ------------');
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

  // var
  // nota1, nota2, media : real

  let nota1 = 0;
  let nota2 = 0;
  let media = 0;

  // escreva ("Digite a primeira nota: ")
  // leia (nota1)

  // enquanto (nota1 < 0) ou (nota1 > 10) faca
  // escreval ("Nota invalida! Digite novamente!: ")
  // leia (nota1)
  // fimenquanto

  console.log('Digite a primeira nota:');
  {
    nota1 = await leia();

    while (nota1 < 0 || nota1 > 10);
    console.log('Nota invalida! Digite novamente!');
    nota1 = await leia();
  }
  {
    console.log('Digite a segunda nota:');
    nota2 = await leia();

    while (nota2 < 0 || nota1 > 10);
    console.log('Nota invalida! Digite novamente!');
    nota2 = await leia();
  }

  media = nota1 + nota2 / 2;
  console.log('SUA MEDIA =', media);
  // media <- (nota1 + nota2) / 2
  // escreval ("SUA MEDIA = ", media:4:2)
};

main();

// console.log('Digite a primeira nota:');
// nota1 = await leia();

// while (nota1 < 0 || nota1 > 10);
// console.log('Nota invalida! Digite novamente!');
// nota1 = await leia();
