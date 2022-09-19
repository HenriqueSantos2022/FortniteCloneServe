console.log('--------------------------------');
console.log('----------- Aula 62 ------------');
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

  // x , y : real

  let x = null;
  let y = null;

  // escreval ("Digite os valores das coordenaadas X e Y: ")
  // leia (x)
  // leia (y)

  console.log('Digite os valores das coordenadas X e Y ');

  x = parseInt(await leia());
  y = parseInt(await leia());
  /* /
  enquanto ( x <> 0) e (y <> 0 ) faca
     se ( x > 0 ) e (y > 0 ) entao
         escreval ("QUADRANTE Q1")
       senao
          se( x < 0 ) e (y > 0) entao
            escreval ("QUADRANTE Q2")
       senao
           se ( x < 0 ) e ( y < 0 ) entao
               escreval ("QUADRANTE Q3")
            senao
               escreval ("QUADRANTE Q4")
            fimse
         fimse
      fimse
   escreval ("Digite os valores das coordenaadas X e Y: ")
   leia (x)
   leia (y)
  / */

  while (x != 0 && y != 0);

  if (x > 0 && y > 0) {
    console.log('QUADRANTE Q1');
  } else {
    x < 0 && y > 0;
    console.log('QUADRANTE Q2');
    if (x < 0 && y < 0) {
      console.log('QUADRANTE Q3');
    } else {
      console.log('QUADRANTE Q4');
    }
  }
};

main();
