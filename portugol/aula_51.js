console.log('--------------------------------');
console.log('----------- Aula 51 ------------');
console.log('-------------------------------- \n');

/* /
Algoritmo "problema_lanchonete"

Var
codigo, quantidade : inteiro
valor, preco: real
/ */

let codigo = 0;
let quantidade = 0;
let VALOR = 0;
let preco = 0;

codigo = 2;
quantidade = 3;
preco = 5;
VALOR = preco * quantidade;

/* /
escreval ("Codigo do produto comprado: ")
leia (codigo)
escreval("Quantidade comprada: ")
leia (quantidade)
valor <- quantidade * preco
/ */

console.log('Codigo do produto comprado:', codigo);
console.log('Quantidade comprada', quantidade);
/* /
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
/ */

if ((codigo = 1)) {
  console.log('Valor a pagar = ', VALOR);
} else {
  codigo = 2;
  console.log('Valor a pagar = ', VALOR);
  if ((codigo = 3)) {
    console.log('Valor a pagar = ', VALOR);
  } else {
    codigo = 4;
    console.log('Valor a pagar = ', VALOR);
    if ((codigo = 5)) {
      console.log('Valor a pagar = ', VALOR);
    }
  }
}
