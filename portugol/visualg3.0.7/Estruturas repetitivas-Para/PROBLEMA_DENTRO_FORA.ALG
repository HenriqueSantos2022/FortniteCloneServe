Algoritmo "Problema_dentro_fora"

Var

X, N, dentro, fora  : inteiro


Inicio

N <- 0
X <- 0


   escreval ("Quantos numeros voce vai digitar? ")
   leia (N)

   para i de 1 ate N

   escreva("Digite um numero:")
   leia (X)

    se (X >= 10) e (X <= 20) entao
       dentro <- dentro + 1
    senao
       fora <- fora + 1
    fimse

fimpara
  
  
  escreval (dentro, "DENTRO")
  escreval (fora, "FORA")

Fimalgoritmo