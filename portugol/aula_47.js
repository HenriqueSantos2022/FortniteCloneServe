console.log('--------------------------------');
console.log('----------- Aula 47 ------------');
console.log('-------------------------------- \n');

// minutos : inteiro
// valor : real

const minutos = 110;
let VALOR = 0;

// escreva ("Digite a quantidadde de minutos gasto: ")
// leia (minutos)

console.log('Digite a quantidade de minutos gasto:', minutos);

// valor <-50.0
// valor <- valor + 2 * (minutos - 100)

VALOR = 50;
VALOR += 2 * (minutos - 100);

// escreval ("O VALOR A SEG PAGO R$ = ",valor:4:2)

console.log('O VALOR A SER PAGO R$ = ', VALOR);

/* /se minutos >100 entao
escreva ("Plano excedido!")
senao minutos <100 entao
 escreva ("Plano nao excedido!")
fimse/ */

if (minutos > 100) {
  console.log('Plano excedido!');
} else {
  minutos < 100;
  console.log('Plano nao excedido!');
}
