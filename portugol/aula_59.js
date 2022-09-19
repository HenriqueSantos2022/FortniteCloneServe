console.log('--------------------------------');
console.log('----------- Aula 59 ------------');
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

  // idade, soma, cont : inteiro
  // media : real

  let idade = 0;
  let soma = 0;
  let cont = 0;
  let media = 0;
  const maximo = 0;
  // let maximo = 0
  // escreval ("Digite as idades: ")
  // leia (idade)
  // soma <-0
  // cont <-0

  console.log('Digite as idades:');
  idade = parseInt(await leia());

  // enquanto idade >=0 faca
  // soma <- soma + idade
  // cont <- cont + 1

  while (idade > 0) {
    soma += idade;
    cont += 1;

    // leia (idade)
    // fimenquanto

    idade = parseInt(await leia());
  }

  if (cont == 0) {
    console.log('Impossivel Calcular');
  } else {
    media = parseInt(soma / cont);
    console.log('MEDIA', media);

    if (maximo > 5) {
      console.log('Contagem de idades maximo de 5');
    } else {
      maximo < 5;
      console.log('Contagem minima de idades e 5');
    }
  }
  // se cont = 0 entao
  // escreval ("Impossivel Calcular")
  // senao
  // media <- soma / cont
  // escreval ("MEDIA = ",media:4:2)
  // fimse
};
main();
