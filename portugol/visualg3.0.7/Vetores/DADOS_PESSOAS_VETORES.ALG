Algoritmo "Dados_pessoas_vet"

Var

N, i : inteiro
menorAltura : real
maiorAltura : real
mediaAlturaF : real
contMulheres : inteiro
contHomens : inteiro
somaAlturaF : real
VetGenero : vetor [0..5] de caractere
vetAlturas : vetor [0..5] de real

Inicio

   escreval("Quantas pessoas serao digitadas? ")
   leia(N)

   para i de 0 ate N-1 faca

   escreval("Genero da", i+1, "a pessoa:")
   leia(VetGenero[i])
   escreval("Altura da", i+1, "a pessoa:")
   leia(vetAlturas[i])

   fimpara


  maiorAltura <- vetAlturas[0]
  menorAltura <- vetAlturas[0]

  para i de 0 ate N-1 faca
  se vetAlturas[i] > maiorAltura entao
     maiorAltura <- vetAlturas[i]
  fimse

   se vetAlturas[i] < menorAltura entao
      menorAltura <- vetAlturas[i]
  fimse
fimpara

    escreval("Maior altura = ", maiorAltura:4:2)
    escreval("Menor altura = ", menorAltura:4:2)


   somaAlturaF <- 0
   contMulheres <- 0

   para i de 0 ate N-1 faca
       se VetGenero[i] = "F" entao
   somaAlturaF <- somaAlturaF + vetAlturas[i]
   contMulheres <- contMulheres + 1
   fimse
 fimpara
 
   se contMulheres = 0 entao
      escreval("Impossivel calcular a altura das mulheres")
   senao
   mediaAlturaF <-  somaAlturaF / contMulheres
   escreval("Media das alturas das mulheres = ", mediaAlturaF:4:2)
   fimse

   contHomens <- N - contMulheres
   escreval("Numero de homens = ",contHomens)
   
Fimalgoritmo