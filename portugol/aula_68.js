console.log('--------------------------------');
console.log('----------- Aula 68 ------------');
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
  /* /
n, i : inteiro
a, b, c, media  : real
Inicio
 escreval ("Quantos casos voce vai digitar ? ")
 leia (n)
   para i de 1 ate n faca

 escreval ("Digite tres numeros")
 leia (a)
 leia (b)
 leia (c)

 media <- ( a * 2 + b * 3 + c * 5 ) / 10
 escreval ("MEDIA =", media )
  / */

  let n;
  let valor;
  let valor1;
  let valor2;
  let media;

  console.log('Quantos casos voce vai digitar ? ');
  n = await leia();

  for (let i = 0; i < n; i++) {
    console.log('Digite tres numeros :');
    a = await leia();
    b = await leia();
    c = await leia();

    media = valor * 2.0 + valor1 * 3.0 + (valor2 * 5.0) / 10.0;
    console.log('MEDIA =', media);
  }
};

main();
