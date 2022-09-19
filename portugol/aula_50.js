console.log('--------------------------------');
console.log('----------- Aula 50 ------------');
console.log('-------------------------------- \n');

/* /Var

  d1, d2, d3, maiorDistancia: real

Inicio

escreva ("Digite as tres distancias: ")
leia (d1)
leia (d2)
leia (d3)
/ */

let d1 = 0;
let d2 = 0;
let d3 = 0;
// maiorDistancia = 0;

d1 = 500;
d2 = 345;
d3 = 750;

/* /se (d1 > d2) ou (d1 > d3) entao
  maiorDistancia <- d1
senao
   se d2 > d3 entao
  maiorDistancia <-d2
senao
  maiorDistancia <- d3

    fimse
   fimse
/ */

if (d1 > d2 && d1 > d3) {
  console.log('MAIOR DISTANCIA D1', d1);
} else if (d2 > d1 && d2 > d3) {
  console.log('MAIOR DISTANCIA D2', d2);
} else if (d3 > d1 && d3 > d2) {
  console.log('MAIOR DISTANCIA D3', d3);
}
