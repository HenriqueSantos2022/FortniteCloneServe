Algoritmo "Problem_vetor_impares"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 

Var

N, i : inteiro
QuantPares : inteiro
Vet : vetor [0..6] de inteiro

Inicio
    escreval ("Quantos numeros voce vai digitar?")
    leia (N)

    para i de 0 ate N-1 faca

    escreval ("Digite um numero:")
    leia (Vet [i])
 fimpara

 QuantPares <-0
 
 escreval
 escreval ("NUMEROS PARES: ")
 para i de 0 ate N-1 faca
 se vet[i] % 2 = 0 entao
    escreva (vet[i], " ")
    QuantPares <- QuantPares + 1
    fimse
 fimpara
 
  escreval
  escreval
  escreval ("QUANTIDADE DE PARES = ", QuantPares)
  

Fimalgoritmo