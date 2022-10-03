console.log('--------------------------------');
console.log('------ Aula 79 VETORES ---------');
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

  // Var
  // maior, posMaior : inteiro
  // N, i :inteiro
  // vetNomes : vetor [0..9] de caractere
  // vetIdades : vetor [0..9]de inteiro

  let N = 0;
  let i = 0;
  let maior = 0;
  let posMaior = 0;
  let vetNomes = [''];
  let vetIdades = [0, 1, 2, 3];

  // escreval("Quantas pessoas voce vai digitar? ")
  // leia(N)
  // para i de 0 ate N-1 faca
  // escreval("Dados da ", i+1, " a pessoa: ")
  // escreva("Nome:")
  // leia(VetNomes[i])
  // escreva("Idade:")
  // leia(Vetidades[i])

  console.log('Quantas pessoas voce vai digitar? ');
  N = parseInt(await leia());
  for (let i = 0; i <= N - 1; i++) {
    console.log('Dados da ', i + 1, ' a pessoa: ');
    console.log('Nome:');
    vetNomes[i] = await leia();
    console.log('Idade:');
    vetIdades[i] = parseInt(await leia());
  }

  // maior <- vetIdades[0]
  // posMaior <- 0
  // para i de 0 ate N-1 faca
  // se vetIdades[i] > maior entao
  // maior <- VetIdades[i]
  // posMaior <- i
  // fimse
  // fimpara

  maior = vetIdades[0];
  posMaior = 0;

  for (let i = 0; i <= N - 1; i++) {
    if (vetIdades[i] > maior) {
      maior = vetIdades[i];
      posMaior = i;
    }
  }

  //escreval("PESSOA MAIS VELHA : ", VetNomes[posMaior])
  console.table(vetNomes);
  console.table(vetIdades);
  console.table(vetIdades);
  console.log('PESSOA MAIS VELHA :', vetNomes[posMaior]);
  console.log('Fim do Programa!!!');
};
main();
