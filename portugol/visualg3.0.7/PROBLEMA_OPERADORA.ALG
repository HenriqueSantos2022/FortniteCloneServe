Algoritmo "Problema_Operadora"

Var

minutos : inteiro
valor : real

Inicio
   escreva ("Digite a quantidadde de minutos gasto: ")
   leia (minutos)

   valor <- 50.0
   valor <- valor + 2 * (minutos - 100)

   escreval ("O VALOR A SEG PAGO R$ = ",valor:4:2)
   
   se minutos >100 entao
      escreva ("Plano excedido!")
   senao minutos <100 entao
       escreva ("Plano nao excedido!")
   fimse



Fimalgoritmo
