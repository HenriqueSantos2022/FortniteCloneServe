Algoritmo "Vet_linhas"


Var

N, i, j : inteiro
MaiorE : real
mat : vetor [0..4, 0..4] de real

Inicio

   escreval("Qual a ordem da matriz? ")
   leia(N)

   para i de 0 ate N-1 faca
      para j de 0 ate N-1 faca
           escreva("Elemento[", i, ",", j,"]:")
           leia(mat[i, j])
   fimpara
fimpara

    escreval("MAIOR ELEMENTO DE CADA LINHA: ")

    para i de 0 ate N-1 faca
         MaiorE <- mat[i, 0]

       para j de 1 ate N-1 faca
         se mat[i, j] > MaiorE entao
            MaiorE <- mat[i, j]
     fimse
  fimpara
  
    escreval(MaiorE)
    
fimpara


Fimalgoritmo