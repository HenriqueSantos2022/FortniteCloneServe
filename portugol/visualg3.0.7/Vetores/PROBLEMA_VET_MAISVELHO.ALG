Algoritmo "problema_vet_maisvelho"

Var

maior, posMaior : inteiro
N, i :inteiro
vetNomes : vetor [0..9] de caractere
vetIdades : vetor [0..9]de inteiro

Inicio

    escreval("Quantas pessoas voce vai digitar? ")
    leia(N)

    para i de 0 ate N-1 faca
    escreval("Dados da ", i+1, " a pessoa: ")
       escreva("Nome:")
    leia(VetNomes[i])
       escreva("Idade:")
    leia(Vetidades[i])

fimpara

   maior <- vetIdades[0]
   posMaior <- 0
   
   para i de 0 ate N-1 faca
     se vetIdades[i] > maior entao
        maior <- VetIdades[i]
        posMaior <- i
   fimse
fimpara

   escreval("PESSOA MAIS VELHA : ", VetNomes[posMaior])




Fimalgoritmo

