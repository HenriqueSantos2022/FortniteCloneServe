Algoritmo "Mat_Soma_linhas"

Var
Mat : vetor [0..5, 0..5] de real
vetSoma : vetor [0..5] de real
M, N, i, j : inteiro

Inicio

escreval("Qual a quantidade de linhas da matriz?")
leia(M)

escreval("Qual a quantidade de colunas da matriz?")
leia(N)

  para i de 0 ate M-1 faca
    escreval("Digite os elementos da", i+1, " linha: ")
    para j de 0 ate N-1 faca
    leia(Mat[i, j])

   fimpara
fimpara
  para i de 0 ate M-1 faca
  vetSoma[i] <- 0
  para j de 0 ate N-1 faca
     vetSoma[i] <- vetSoma[i] + Mat[i, j]
  fimpara
fimpara

 escreval("VETOR GERADO: ")
 para i de 0 ate M-1 faca
    escreval(vetSoma[i]:3:2)
fimpara

Fimalgoritmo