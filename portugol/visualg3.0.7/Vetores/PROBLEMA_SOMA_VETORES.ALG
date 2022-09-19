Algoritmo "Problema_soma_vetores"

Var

   N, i : inteiro
   X, soma, media : real
   vet : vetor [0..5] de real


Inicio

   escreval ("Quantos numeros voce vai digitar?")
   leia (N)

   para i de 0 ate N- 1 faca
      escreval ("Digite um numero:")
      leia (vet[i])
   fimpara
   escreval
   escreva ("VALORES = ")
   para i de 0 ate N-1 faca
        escreva(vet[i]:3:1, " ")
   fimpara
   
   soma <- 0
   para i de 0 ate N-1 faca
   soma <- soma + vet [i]
   fimpara
   escreval
   escreval ("SOMA = ", soma:4:2)
   media <- soma / N
   escreval ("MEDIA = ", media:4:2)
   

Fimalgoritmo