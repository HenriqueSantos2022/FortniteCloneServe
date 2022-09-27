Algoritmo "soma_matrizes"

Var
M, N, i, j : inteiro
matA : vetor [0..4, 0..4] de inteiro
matB : vetor [0..4, 0..4] de inteiro
matC : vetor [0..4, 0..4] de inteiro

Inicio

escreval("Quantas linhas vai ter cada matriz? ")
leia(m)
escreval("Quantas colunas vai ter cada matriz?")
leia(N)

escreval("Digite os valores da matriz A" )
para i de 0 ate M-1 faca
    para j de 0 ate N-1 faca
       escreval("Elemento, [", i, ",", j, "]: ")
       leia(matA[i, j])
    fimpara
fimpara


escreval("Digite os valores da matriz B" )
para i de 0 ate M-1 faca
    para j de 0 ate N-1 faca
       escreval("Elemento, [", i, ",", j, "]: ")
       leia(matB[i, j])
    fimpara
fimpara


para i de 0 ate M-1 faca
    para j de 0 ate N-1 faca
      matC[i, j] <- matA[i, j] +  matB[i, j]
    fimpara
fimpara

   escreval("MATRIZ SOMA:")
   para i de 0 ate M-1 faca
       para j de 0 ate N-1 faca
       escreva(matC[i, j], " ")
       fimpara
       escreval
   fimpara


Fimalgoritmo