Algoritmo "problema_negativos_matriz""

Var

M, N, i, j : inteiro
Mat : vetor [0..5, 0..5] de inteiro
Inicio

escreval("Qual a quantidade de linhas da matriz?")
leia(M)
escreval("Qual a quantidade de colunas da matriz? ")
leia(N)

para i de 0 ate M-1 faca
   para j de 0 ate N-1 faca
   escreval("Elemento [", i, ",", j, "]:")
   leia(Mat[i, j])
  fimpara
fimpara


escreval("VALORES NEGATIVOS:")

para i de 0 ate M-1 faca
   para j de 0 ate N-1 faca
     se Mat[i, j] <0 entao
       escreval(Mat[i, j])
     fimse
   fimpara
fimpara

Fimalgoritmo