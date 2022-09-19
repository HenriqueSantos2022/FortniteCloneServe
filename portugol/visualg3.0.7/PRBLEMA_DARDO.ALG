Algoritmo "prblema_dardo"

Var

  d1, d2, d3, maiorDistancia: real

Inicio

escreva ("Digite as tres distancias: ")
leia (d1)
leia (d2)
leia (d3)


se (d1 > d2) ou (d1 > d3) entao
  maiorDistancia <- d1
senao
   se d2 > d3 entao
  maiorDistancia <-d2
senao
  maiorDistancia <- d3

    fimse
   fimse

escreval ("MAIOR DISTANCIA", maiorDistancia::2)



Fimalgoritmo