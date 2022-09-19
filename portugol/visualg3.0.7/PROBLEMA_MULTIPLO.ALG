Algoritmo "problema_multiplo"

var

   x, y : inteiro


Inicio

   escreva ("Digite dois numeros inteiros: ")
   leia (x)
   leia (y)
   
    se (x mod y = 0) ou (y mod x = 0) entao
        escreva("Sao multiplos")
    senao
        escreval("Nao sao multiplos")
   fimse
   
Fimalgoritmo