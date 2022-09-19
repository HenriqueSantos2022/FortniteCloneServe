Algoritmo "problema_lanchonete"

Var

codigo, quantidade : inteiro

valor, preco: real

Inicio

escreval ("Codigo do produto comprado: ")
leia (codigo)
escreval("Quantidade comprada: ")
leia (quantidade)

valor <- quantidade * preco

 se codigo = 1 entao
    valor <- 5.00 * quantidade
 senao
    codigo = 2 entao
    valor <- 3.50 * quantidade
 se 3codigo = 3 entao
    valor <- 4.80 * quantidade
 senao
    codigo = 4
    valor <- 8.90 * quantidade
 se codigo = 5 entao
    valor <- 7.32 * quantidade
 senao
    codigo = 6
    valor <- 2.50 * quantidade

   fimse
  fimse
 fimse

escreval("Valor a pagar = ", valor:4:2)

Fimalgoritmo