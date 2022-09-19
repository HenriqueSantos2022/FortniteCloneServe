Algoritmo "test_combustivel"


var

codigo, alcool, gasolina, diesel : inteiro

Inicio

   alcool <- 0
   gasolina <- 0
   diesel <- 0

   escreval ("Digite um código (1, 2, 3) ou 4 para parar: ")
   leia (codigo)

   enquanto codigo <> 4 faca

   escolha codigo
   caso 1
     alcool <- alcool + 1
   caso 2
     gasolina <- gasolina + 1
   caso 3
     diesel <- diesel + 1

   fimescolha
   
   escreval ("Digite um código (1, 2, 3) ou 4 para parar: ")
   leia (codigo)
  fimenquanto

  escreval ("MUIT0 OBRIGADO")
  escreval ("Gasolina", gasolina)
  escreval ("Alcool", alcool)
  escreval ("Diesel", diesel)



Fimalgoritmo