function programa45() {
  console.log('--------------------------------');
  console.log('----------- Aula 45 ------------');
  console.log('-------------------------------- \n');

  // Var
  // primeiroValor : inteiro
  // segundoValor : inteiro
  // terceiroValor : inteiro
  // menorValor : real
  let primeiroValor = 0;
  let segundoValor = 0;
  let terceiroValor = 0;
  let menorValor = 0;

  // Inicio
  // escreva ("Digite o primeiro valor: ")
  // leia (primeiroValor)
  // escreva ("Digite o segundo valor: ")
  // leia (segundoValor)
  // escreva ("Digite o terceiro valor: ")
  // leia (terceiroValor)
  primeiroValor = 100.1;
  segundoValor = 100;
  terceiroValor = 99.9999;

  // se (primeiroValor < segundoValor) e (primeiroValor < terceiroValor) entao
  //     menorValor <- primeiroValor
  // senao
  //   se segundoValor < terceiroValor entao
  //     menorValor <- segundoValor
  // senao
  //     menorValor <- terceiroValor
  //   fimse
  // fimse

  if (primeiroValor < segundoValor && primeiroValor < terceiroValor) {
    menorValor = primeiroValor;
  } else if (segundoValor < terceiroValor) {
    menorValor = segundoValor;
  } else {
    menorValor = terceiroValor;
  }

  // escreval ("MENOR VALOR = ", menorValor:4:2)
  console.log('MENOR VALOR = ', menorValor);
}
