Algoritmo "Problema_maior_vetor"

Var
N, i, posMaior: inteiro
vet : vetor [0..5] de real
maiorValor: real

Inicio

 escreval ("Quanto numeros voce vai digitar? ")
 leia (N)

 para i de 0 ate N-1 faca
 
 escreval ("Digite um numero: ")
 leia (vet[i])
 fimpara
 
 maiorValor <- vet [0]
 posMaior <- 0
 
 para i de 0 ate N-1 faca
 se vet[i] > maiorValor entao
    maiorValor <- vet[i]
    posMaior <- i
  fimse
fimpara

     escreval
     escreval ("MAIOR VALOR = ", maiorValor:4:2)
     escreval ("POSICAO DO MAIOR VALOR = ", posMaior)

Fimalgoritmo