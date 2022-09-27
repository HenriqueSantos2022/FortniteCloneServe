Algoritmo "Vet_cima_diagonal"

Var

N, i, j : inteiro
soma : inteiro
mat : vetor [0..4, 0..4] de inteiro

Inicio

   escreval("Qual a ordem da matriz? ")
   leia(N)

   para i de 0 ate N-1 faca
       para j de 0 ate N-1 faca
        escreval("Elemento[", i, ",", j, "]:")
        leia(mat[i, j])
     fimpara
   fimpara

   para i de 0 ate N-1 faca
       para j de i+1 ate N-1 faca
       soma <- soma + mat[i, j]
     fimpara
   fimpara
   
   escreval("SOMA DOS ELEMENTOS ACIMA DA DIAGONAL PRINCIPAL =", soma)

Fimalgoritmo