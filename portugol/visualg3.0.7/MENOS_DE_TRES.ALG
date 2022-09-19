Algoritmo "menor_de_tres"

Var

primeiroValor : inteiro
segundoValor : inteiro
terceiroValor : inteiro
menorValor : real

Inicio

escreva ("Digite o primeiro valor: ")
leia (primeiroValor)
escreva ("Digite o segundo valor: ")
leia (segundoValor)
escreva ("Digite o terceiro valor: ")
leia (terceiroValor)


se (primeiroValor < segundoValor) e (primeiroValor < terceiroValor) entao
    menorValor <- primeiroValor
senao
  se segundoValor < terceiroValor entao
    menorValor <- segundoValor
senao
    menorValor <- terceiroValor
  fimse
fimse

  escreval ("MENOR VALOR = ", menorValor:4:2)

Fimalgoritmo