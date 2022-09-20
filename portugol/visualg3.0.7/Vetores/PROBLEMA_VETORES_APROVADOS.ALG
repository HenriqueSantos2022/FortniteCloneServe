Algoritmo "Problema_vetores_aprovados"

Var
   N, i, soma, posMaior : inteiro
   media : real
   vetNome : vetor [0..5] de caractere
   vetNota1: vetor [0..5] de real
   vetNota2: vetor [0..5] de real


Inicio

   escreval("Quantos alunos serao digitados? ")
   leia(N)

   para i de 0 ate N-1 faca
   escreval("Digite nome, primeira e segunda nota do", i+1, "o aluno: ")
   leia(vetNome[i])
   leia(vetNota1[i])
   leia(vetNota2[i])
fimpara

   escreval("Alunos aprovados:")
   para i de 0 ate N-1 faca
     media <- (vetNota1[i] + vetNota2[i]) / 2
     se media >= 6 entao
        escreval(vetNome[i])
     fimse
fimpara

Fimalgoritmo