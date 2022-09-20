Algoritmo "media_pares_vetores"

Var

N, i : inteiro
contPares : inteiro
media : real
soma : inteiro
vetN : vetor [0..5] de inteiro
Inicio

   escreval("Quantos elementos vai ter o vetor?")
     leia(N)

   para i de 0 ate N-1 faca
      escreva("Digite um numero:")
      leia(vetN[i])
   fimpara

soma <- 0
contPares <- 0

   para i de 0 ate N-1 faca
     se vetN[i] % 2 = 0 entao
     soma <- soma + vetN[i]
     contPares <- contPares + 1
   fimse
 fimpara
 
     se contPares = 0 entao
       escreval("NENHUM NUMERO PAR")
       senao
     media <- soma / contpares
     escreval("MEDIA DOS PARES = ", media:3:1)
   fimse

Fimalgoritmo