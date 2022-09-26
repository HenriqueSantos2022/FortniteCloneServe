Algoritmo "Mat _diagonal_negativos"

Var
N, i, j: inteiro
mat : vetor [0..10, 0..10] de inteiro
Cont : inteiro
Inicio

  escreva("Qual a ordem da matriz? ")
leia(N)

para i de 0 ate N-1 faca
  para j de 0 ate N-1 faca

     escreval("Elemento [", i, ",", j,  "]: ")
     leia(mat[i, j])
     fimpara
  fimpara

escreval("DIAGONAL PRINCIPAL: ")
para i de 0 ate N-1 faca
  escreva(mat[i, i], " ")
fimpara
escreval
 
 Cont <- 0
 para i de 0 ate N-1 faca
    para j de 0 ate N-1 faca
       se mat[i, j] < 0 entao
          Cont <- Cont + 1
        fimse
     fimpara
fimpara

escreval("QUANTIDADE DE NEGATIVOS = ", Cont)


Fimalgoritmo

