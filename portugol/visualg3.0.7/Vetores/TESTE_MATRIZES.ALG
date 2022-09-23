Algoritmo "teste_matrizes"

Var

M, N, i, J : inteiro
mat : vetor [0..4,0..4] de inteiro

Inicio

   escreval("Qantas linhas vai ter a Matriz ?")
   leia(M)
   escreval("Quantas colunas vai ter a matriz ?")
   leia(N)
   
   para i de 0 ate M-1 faca
     para j de 0 ate N-1 faca
       escreval("Elemento [", i, ",", j, "]: ")
         leia(mat[i, j])
     fimpara
   fimpara
   
   escreva
   escreval("MTRIZ DIGITADA:")
   para i de 0 ate N-1 faca
       escreval(mat[i, j], " ")
     fimpara
     escreval

Fimalgoritmo