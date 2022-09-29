console.log('--------------------------------');
console.log('----------- Aula 74 VETORES ------------');
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

  // N, i : inteiro
  // menorAltura : real
  // maiorAltura : real
  // mediaAlturaF : real
  // contMulheres : inteiro
  // contHomens : inteiro
  // somaAlturaF : real
  // VetGenero : vetor [0..5] de caractere
  // vetAlturas : vetor [0..5] de real

  let N = 0;
  let i = 0;
  let maiorAltura = 0;
  let menorAltura = 0;
  let mediaAlturaF = 0;
  let contMulheres = 0;
  let contHomens = 0;
  let somaAlturaF = 0;
  let vetorGenero = [0, 1, 2, 3];
  let vetorAlturas = [0, 1, 2, 3];

  // Inicio

  // escreval("Quantas pessoas serao digitadas? ")
  // leia(N)

  // para i de 0 ate N-1 faca

  // escreval("Genero da", i+1, "a pessoa:")
  // leia(VetGenero[i])
  // escreval("Altura da", i+1, "a pessoa:")
  // leia(vetAlturas[i])

  // fimpara

  // for (let i = 0; i <= N - 1; i++) {
  //   matriz.push([]);
  //   for (let j = 0; j <= N - 1; j++) {
  //     matriz[i].push(0);

  console.log('Quantas pessoas serao digitadas? ');
  N = parseInt(await leia());

  for (let i = 0; i <= N - 1; i++) {
    console.log('Genero da', i + 1, 'a pessoa:');
    vetorGenero[i] = await leia();
    console.log('Altura da', i + 1, 'a pessoa:');
    vetorAlturas[i] = parseInt(await leia());
  }

  //   maiorAltura <- vetAlturas[0]
  //   menorAltura <- vetAlturas[0]

  //   para i de 0 ate N-1 faca
  //   se vetAlturas[i] > maiorAltura entao
  //      maiorAltura <- vetAlturas[i]
  //   fimse

  //    se vetAlturas[i] < menorAltura entao
  //       menorAltura <- vetAlturas[i]
  //   fimse
  // fimpara

  maiorAltura = vetorAlturas[i];
  menorAltura = vetorAlturas[i];

  for (let i = 0; i <= N - 1; i++) {
    if (vetorAlturas[i] > maiorAltura) {
      maiorAltura = vetorAlturas[i];
    } else {
      vetorAlturas[i] < menorAltura;
      menorAltura = vetorAlturas[i];
    }
  }

  // escreval("Maior altura = ", maiorAltura:4:2)
  // escreval("Menor altura = ", menorAltura:4:2)

  console.log('Maior altura = ', maiorAltura);
  console.log('Menor altura = ', menorAltura);

  somaAlturaF = 0;
  contMulheres = 0;

  //     para i de 0 ate N-1 faca
  //     se VetGenero[i] = "F" entao
  // somaAlturaF <- somaAlturaF + vetAlturas[i]
  // contMulheres <- contMulheres + 1
  // fimse
  // fimpara

  for (let i = 0; i <= N - 1; i++) {
    if (vetorGenero[i] == 'F') {
      somaAlturaF = somaAlturaF + vetorAlturas[i];
      contMulheres = contMulheres + 1;
    }
  }

  //   se contMulheres = 0 entao
  //   escreval("Impossivel calcular a altura das mulheres")
  // senao
  // mediaAlturaF <-  somaAlturaF / contMulheres
  // escreval("Media das alturas das mulheres = ", mediaAlturaF:4:2)
  // fimse

  if (contMulheres == 0) {
    console.log('Impossivel calcular a altura das mulheres');
  } else {
    mediaAlturaF = somaAlturaF / contMulheres;
    console.log('Media das alturas das mulheres = ', mediaAlturaF);
  }

  // contHomens <- N - contMulheres
  // escreval("Numero de homens = ",contHomens)

  contHomens = N - contMulheres;
  console.log('Numero de homens = ', contHomens);

  console.log('Fim do Programa');
};

main();
