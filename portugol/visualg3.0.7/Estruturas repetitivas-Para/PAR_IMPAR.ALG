Algoritmo "par_impar"

Var

n, x, i : inteiro

Inicio

n <- 0
x <- 0

   escreva("Quantos numeros voce ira digitar? ")
   leia (n)


   para i de 1 ate n faca
   
      escreval ("Digite um numero: ")
      leia (x)

   
   se x = 0 entao
      escreval ("NULO")
   senao
      se x % 2 = 0 entao
      se x < 0 entao
         escreval ("PAR NEGATIVO")
      senao
         escreval ("PAR POSITIVO")
     fimse
   senao
      se x < 0 entao
         escreval ("IMPAR NEGATIVO")
      senao
         escreval ("IMPAR POSITIVO")
        fimse
     fimse
 fimse
 
fimpara



Fimalgoritmo