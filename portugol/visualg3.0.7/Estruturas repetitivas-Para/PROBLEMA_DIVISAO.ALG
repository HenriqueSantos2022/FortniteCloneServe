Algoritmo "problema_divisao"

Var

n, i : inteiro

x, y, divisao : real


Inicio

 escreval ("Quantos casos voce ira digitar? ")
 leia (n)
 
 para i de 1 ate n faca

    escreval ("Digite um numeredor: ")
    leia (x)
    escreval ("Digite um denominador: ")
    leia (y)

    se y = 0 entao
       escreval ("Impossivel calcular tente outro N: ")
    senao
       divisao <- x / y
        escreval ("Divisao =", divisao)
 
    fimse
 fimpara
 

 
 
Fimalgoritmo