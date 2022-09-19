// Algoritmo "teste_saida"
// Var
//    produto1: caractere
//    produto2: caractere
//    preco1: real
//    preco2: real
//    idade: inteiro
//    codigo: inteiro
//    genero: caractere

const { local } = require('dynamoose/dist/aws/ddb');

let produto1 = '';
let produto2 = '';
let preco1 = 0;
let preco2 = 0;
let idade = 0;
let codigo = 0;
let genero = '';

// produto1 <- "Computador"
// produto2 <- "Tv"
// preco1 <- 2100.5
// preco2 <- 1830.0
// idade <-30
// codigo <-591
// genero <-"F"

produto1 = 'Computador';
produto2 = 'Tv';
preco1 = 2100.5;
preco2 = 1830.0;
idade = 30;
codigo = 591;
genero = 'F';

// escreval("Produtos")
// escreval
// escreval("O produto ", produto1, " custa R$",preco1 )
// escreval
// escreval("O produto ", produto2, " custa R$",preco2 )
// escreval
// escreval ("O codigo do produtoe e ", codigo)
// escreval
// escreval ("O genero da pessoa dona desses produtos e ", genero)
// escreval
// escreval ("A pessoa dona desses produtos tem a idade de ", idade)

console.log('Produtos');
console.log();
console.log('O produto ', produto1, ' custa R$', preco1);
console.log();
console.log('O produto ', produto2, ' custa R$', preco2);
console.log();
console.log('O codigo do produtoe e ', codigo);
console.log();
console.log('O genero da pessoa dona desses produtos e ', genero);
console.log();
console.log('A pessoa dona desses produtos tem a idade de ', idade);
console.log();
// exemplo-1

/* /Var

a : real
b : inteiro

Inicio

a <- 5.8
b <- int (a)

escreval(b)
/ */

let a = 5.8;
let b = a;

a = 5.8;
b = a;

console.log('O valor de ', b, ' foi atruibuido pela variavel a');
console.log();
// exemplo-2

/* /

a : real
b : real

Inicio

a <- (10.00 * 30.00)
b <- ( 30.00 * 200.00)

escreval (a)
escreval (b)
/ */

const condicao1 = Number(10.0 * 30.0);
const condicao2 = Number(3 * 200.0);

console.log('A metragem total do terreno possui', condicao1);
console.log();
console.log('O valor do terreno e', condicao2);
console.log();
// exemplo-3

/* /
Var

name : caractere
age : real
nome : caractere
idade : real

Inicio

name <- "Maria Silva"
age <- (19)

nome <- "Henrique Silva"
idade <- (25)

escreval (name)
escreval (age)
escreval (nome)
escreval (idade)
/ */

const nome1 = '';
const age = Number(21);

const nome2 = '';
const Idade = Number(25);

console.log('Maria Silva', nome1, 'idade', Number(21));
console.log();
console.log('Henrique Silva', nome2, 'idade', Number(25));
console.log();
// exemplo-4

/* /Var

a : real
b : real
c : real

Inicio

a <- 12.0 * 20.0
b <- 150.00
c <- 240 * 150

escreval (a)
escreval (b)
escreval (c)
/ */

const condicao3 = Number(12 * 20.0);
const condicao4 = Number(150.0);
const condicao5 = Number(240 * 150);

console.log('A metragem total do terreno e', Number(12 * 20.0));
console.log();
console.log('O valor do metro quadrado do terreno e', Number(150.0));
console.log();
console.log(' O valor total do metro quadrado calculado e ', Number(240 * 150));
console.log();
// exemplo-5

// Programa 'Retangulo'
/* /Var

a : real
b : real
c, resultado : real
d : real
g : real

Inicio

a <-4.00
b <-5.00
c <-400.00 * 500.00
d <-180000
g <-64031

  escreval ("A area total do retangulo e",c)
  escreval ("O perimetro do retangulo e",d)
  escreval ("O valor da diagonal do retangulo e",g)
/ */

let areadoretangulo = 0;
let perimentro = 0;
let diagonal = 0;

areadoretangulo = Number(400 * 500);
perimentro = Number(180000);
diagonal = Number(6.4031);

console.log('A area total do retangulo e', areadoretangulo);
console.log();
console.log('O perimetro do retangulo e', perimentro);
console.log();
console.log('O valor da diagonal do retangulo e', diagonal);
console.log();
// exemplo-6
/* /
var

a : real
b : real
c, resultado  : real
d : real
g : real

Inicio

 a <- 10.3
 b <- 13.10
 c <- 10.3 * 13.10
 d <- 460000
 g <- 166643

 escreval ("A area total do retangulo e", c )
 escreval ("O perimetro do retangulo e", d)
 escreval ("O valor da diangonal do retangulo e", g)
/ */

let retangulo1 = 0;
let perimentro1 = 0;
const diagonal1 = 0;

retangulo1 = 10.3 * 13.1;
perimentro1 = 460000;
diagonal = 166643;

console.log('A area total do retangulo e', retangulo1);
console.log();
console.log('O perimetro do retangulo e', perimentro1);
console.log();
console.log('O valor da diagonal do retangulo e', diagonal);
console.log();
// exemplo-7

/* /
Var

  nome : caractere
  idade : real
  name : caractere
  age :  real

Inicio

 nome <-"Maria Silva"
 idade <- 19
 name <- "Joao Melo"
 age <- 20

 escreval("nome: Maria Silva,idade", 19)
 escreval
 escreva("nome: Joao Melo, idade", 20)
 escreval
 escreval
 escreval ("A idade media da Maria Silva & Joao Melo & d&", 19.5)

/ */

let Maria = '';
let Age = 0;
let Joao = '';
let Age1 = 0;
let meidadeidade = 0;

Maria = 'Maria Silva';
Age = 19;
Joao = 'Joao Melo';
Age1 = 20;
meidadeidade = 19.5;

console.log('nome:', Maria, 'idade', Age);
console.log();
console.log('nome:', Joao, 'idade', Age1);
console.log();
console.log('A media de idade da Maria Silva e do Joao Melo e', meidadeidade);
console.log();

// exemplo-8

/* /
Var

a : real
b : real
c : real

x : real
y : real
z : real

Inicio

a <-12
b <-31
c <-12+31

x <-8
y <-10
z <-8+10

escreval("A soma da variavel A mais a soma da variavel B resultara no valor da varaiavel C que e",(c))
escreval("A soma da variavel X mais a soma da variavel Y resultara no valor da varaiavel Z que e",(z))
escreval

/ */

let A = 0;
let B = 0;
let C = 0;
let X = 0;
let Y = 0;
let Z = 0;

A = 12;
B = 31;
C = 12 + 31;
X = 8;
Y = 10;
Z = 8 + 10;

console.log('A soma da variavel A que e', A, 'mais a soma da variavel B que e', B, 'resultara no valor da varaiavel C que e', C);
console.log();
console.log('A soma da variavel X que e', X, 'mais a soma da variavel Y que e', Y, 'resultara no valor da varaiavel Z que e', Z);
console.log();

// exemplo-9
/* /
Var

 produto : real
 quantidade : real
 cliente : real
 compra : real
 troco : real
Inicio

produto <- 8.00
quantidade <-2
cliente <- 20.00
compra <- 2 * 8.00
troco <-  20.00 - 16

 escreval ("O Preco do produto por unidade e", 8.00)
 escreval
 escreval ("A quantidade comprada foi de", 2)
 escreval
 escreval ("O cliente deu", 20 ," reais para pagar a compra")
 escreval
 escreval ("O valor total da compra foi de ", 2 * 8.00)
 escreval
 escreval ("O cliente recebera de troco a quantia de ", 20.00 - 16, " reais")

/ */

let produto = 0;
let quantidade = 0;
let cliente = 0;
let compra = 0;
let troco = 0;

produto = 8.0;
quantidade = 2;
cliente = 20.0;
compra = 2 * 8.0;
troco = 20.0 - 16.0;

console.log('O valor da unidade do proudto e de', produto, 'reais');
console.log('A quantidade de produto comprada pelo cliente e de', quantidade);
console.log('O clinte deu a quantia de', cliente, 'reais');
console.log('O valor total da compra foi de', compra, 'reais');
console.log('O troco do cliente sera de', troco, 'reais');
console.log();

// exemplo-10

/* /
Var

raio : real
area : real
resultado : real
Inicio

raio <- 2.0
area <- 2 * 3.14
resultado <- 6.28 * 2

 escreval("O valor do Raio e", 2.0)
 escreval
 escreval("O valor da metade da Area e", 2 * 3.14)
 escreval
 escreval("O valor total da Area e ", 6.28 * 2)

/ */

let raio = 0;
let area = 0;
let resultado = 0;

raio = 2.0;
area = 2 * 3.14;
resultado = 6.28 * 2;

console.log('O valor do Raio e', raio);
console.log('O valor da metade da Area e', area);
console.log('O valor total da Area e', resultado);
console.log();

// exemplo-11

/* /
Var

raio : real
area : real
resultado : real

Inicio

raio <- 13.2
area <- 13.2 * 3.14
resultado <- 41.488 * 13.2

escreval("O valor da metade raio no circulo e", 13.2)
escreval("A metade da Area do circulo e",13.2 * 3.14)
escreval("A Area total do circulo e",41.448 * 13.2)

/ */

let raio1 = 0;
const area2 = 0;
let resultado1 = 0;

raio1 = 13.2;
area = 13.2 * 3.14;
resultado1 = 41.448 * 13.2;

console.log('O valor da metade raio no circulo e', raio1);
console.log('A metade da Area do circulo e', area2);
console.log('A Area total do circulo e', resultado1);
console.log();
// exemplo-12

/* /
Var

nome : caractere
valor : real
hora : real
pagamento : real

Inicio

nome <- "Joao Slva"
valor <- 50
hora <- 60
pagamento <- 60 * 50

escreval ("nome : Joao Silva")
escreval
escreval ("O Valor da hora trabalhada pelo funcionario equivale a ", 50, " reais")
escreval
escreval ("O funcionario trabalhou ",60 ," horas no mes")
escreval
escreval ("O pagamento para joao Silva deve ser ", 60 * 50)

/ */

let nome = '';
let valor = 0;
let hora = 0;
let pagamento = 0;

nome = '';
valor = 50;
hora = 60;
pagamento = 60 * 50;

console.log('Nome: Joao Sila', nome);
console.log('O Valor da hora trabalhada pelo funcionario equivale a', valor, 'reais');
console.log('O funcionario trabalhou', hora, 'horas no mes');
console.log('O pagamento para joao Silva deve ser', pagamento);
console.log();

let soma = 0;

soma = 1 + 1;

console.log('A soma de um mais um e', soma);
console.log();
// exemplo-13

/* /
Var

distancia : real
combustivel : real
consumo : real

Inicio

distancia <- 500
combustivel <- 38.5
consumo <- 12.987

escreval ("A distancia percorrida pelo carro foi", 500 ," Km")
escreval ("O combustivel gasto foi", 38.5)
escreval ("O consumo medio do combustivel foi de", 12.987)

/ */

let distancia = 0;
let combustivel = 0;
let consumo = 0;

distancia = 500;
combustivel = 38.5;
consumo = 12.987;

console.log('A distancia percorrida pelo carro foi', distancia, 'Km');
console.log('O combustivel gasto na corrida foi', combustivel);
console.log('O consumo medio do combustivel e de', consumo);
console.log();

// exemplo-14

/* /
var
a : real
b : real
c : real

Inicio

a <- 4.0
b <- 3.5
a <- 5.2

a <- 4.0
b <- 4.0 + 3.5
c <- 4.0 + 3.5 + 5.2

 escreval("A area do Quadrado tem ladon", a)
 escreval("A area do Triangulotem base", b )
 escreval("A area do Trapezio e", c)

/ */

let quadrado = 0;
let traingulo = 0;
let Trapezio = 0;

quadrado = 4.0;
traingulo = 4.0 + 3.5;
Trapezio = 4.0 + 3.5 + 5.2;

console.log('A area do Quadrado tem lado', quadrado);
console.log('A area do Triangulotem base', traingulo);
console.log('A area do Trapezio e', Trapezio);
console.log();

/* /
Var

largura, comprimento,metroQuadrado,area, preco : real

Inicio

escreva ("Digite a largura do terreno: ")
leia(largura)
escreva ("Digite o comprimeto do terreno: ")
leia (comprimento)
escreva ("Digite o valor do metroQuadrado: ")
leia (metroquadrado)

area <- largura * comprimento
preco <-area * metroQuadrado

escreval("Area do terreno = ", area:8:2)
escreval ("Preco do terreno = ", preco:8:2)
/ */

// exemplo-15

let largura = 0;
let comprimento = 0;
let metroQuadrado = 0;
let Area = 0;
let preco = 0;

largura = 10;
comprimento = 30;
metroQuadrado = 200;
Area = 10 * 30;
preco = 300 * 200;

console.log('A area total do terreno e', Area);
console.log('O preco total do terreno e', preco);
console.log();

// exemplo 16
/* /
Var

base, altura, area, perimetro, diagonal: real

Inicio

escreva("Descreva a base do retangulo:")
leia (base)
escreva ("Descreva a altura retangulo:")
leia (altura)

area <-base * altura
perimetro <- 2 * (base + altura)
diagonal <- RaizQ(Exp(base, 2) + Exp (altura, 2))

escreval ("AREA = ", area:6:4)
escreval ("PERIMETRO = ", perimetro:6:4)
escreval ("DIAGONAL = ", diagonal:6:4)
/ */

let BASE = 0;
let ALTURA = 0;
let AREA = 0;
let PERIMETRO = 0;
let DIAGONAL = 0;

BASE = 4000;
ALTURA = 5000;
AREA = 4000 * 5000;
PERIMETRO = 2 * BASE + 2 * ALTURA;
DIAGONAL = BASE * 2 + ALTURA * 2;

console.log('AREA TOTAL = ', AREA);
console.log('VALOR DO PERIMETRO = ', PERIMETRO);
console.log('VALOR DA DIAGONAL = ', DIAGONAL);
console.log();
// exemplo 17

let primeiroSemestre = 0;
let segundoSemestre = 0;
let notaFinal = 0;

primeiroSemestre = 45.5;
segundoSemestre = 31.3;
notaFinal = 45.5 + 31.3;

console.log('A nota final do aluno =', notaFinal);

if (notaFinal < 60) {
  console.log('REPROVADO!');
} else {
  notaFinal >= 60;
  console.log('APROVADO!');
}
console.log();

// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================

// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
