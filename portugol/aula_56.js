console.log('--------------------------------');
console.log('----------- Aula 56 ------------');
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
  // var
  // senha : real
  let senha = null;

  // escreval ("Digite a senha: ")
  // leia (senha)
  console.log('Digite a senha: ');
  senha = await leia();

  // enquanto senha <> 2022 faca
  //          escreval ("Senha Invalida! Tente novamente:")
  //          leia (senha)
  // fimenquanto

  let numeroDeTentativas = 0;
  while (senha != '2022') {
    numeroDeTentativas += 1;

    if (numeroDeTentativas > 5) {
      console.log('Porra! sabe seu nome pelo menos? Tenta novamente ai a senha carai!');
    } else {
      console.log('Senha Invalida! Tente novamente:');
    }

    senha = await leia();
  }

  // escreval ("Acesso permitido! ")
  console.log('Acesso permitido! ');
};
main();
