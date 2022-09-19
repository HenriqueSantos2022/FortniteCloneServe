console.log('--------------------------------');
console.log('----------- Aula 64 ------------');
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

  // alcool <- 0
  // gasolina <- 0
  // diesel <- 0

  let alcool = 0;
  let gasolina = 0;
  let diesel = 0;
  let codigo = 0;

  // escreval ("Digite um código (1, 2, 3) ou 4 para parar: ")
  // leia (codigo)

  console.log('Digite um código (1, 2, 3) ou 4 para parar:');
  codigo = await leia();

  // enquanto codigo <> 4 faca
  // escolha codigo
  // caso 1
  // alcool <- alcool + 1
  // caso 2s
  // gasolina <- gasolina + 1
  // caso 3
  // diesel <- diesel + 1

  while (codigo != 4);

  switch (codigo) {
    case (codigo = 1):
      alcool += 1;

    case (codigo = 2):
      gasolina += 1;

    case (codigo = 3):
      diesel += 1;
  }

  // escreval ("Digite um código (1, 2, 3) ou 4 para parar: ")
  // leia (codigo)
  // fimenquanto

  console.log('Digite um código (1, 2, 3) ou 4 para parar:');
  codigo = await leia();

  // escreval ("MUIT0 OBRIGADO")
  // escreval ("Gasolina", gasolina)
  // escreval ("Alcool", alcool)
  // escreval ("Diesel", diesel)

  console.log('OBRIGADO');
  console.log('Gasolina', gasolina);
  console.log('Alcool', alcool);
  console.log('Diesel', diesel);
};

main();
