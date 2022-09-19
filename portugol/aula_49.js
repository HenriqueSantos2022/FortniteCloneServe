const { logger } = require('dynamoose');

console.log('--------------------------------');
console.log('----------- Aula 49 ------------');
console.log('-------------------------------- \n');

// Var normal, elevado, diabetes, glicose : real

/* / escreval ("Digite a medida da glicose: ")
 leia (glicose)

 normal <- 100
 elevado <- 140.0
 diabetes <- 143.2
/ */

const normal = 100;
const elevado = 140.0;
const diabetes = 143.2;
glicose = 101;

/* /
 escreval ("Ate",normal, " mg/dl")
 escreval ("Maior que",normal," ate",elevado," mg/dl")
 escreval ("Maior de",elevado, "mg/dl")
/ */

console.log('Ate', normal, ' mg/dl normal');
console.log('Maior que', normal, ' ate', elevado, ' mg/dl elevado');
console.log('Maior de', elevado, 'mg/dl diabetes');

/* /
 se glicose <= 100.00 entao
    escreval ("Classificacao: normal")
 senao
 se glicose <=140.0 entao
    escreval ("Classificacao: elevado ")
 senao
     escreval ("Classificacao: diabetes ")

  fimse
 fimse

/ */
if (glicose <= 50) {
  console.log('Classificacao: Dados incorretos');
} else if (glicose > 50 && glicose <= 100) {
  console.log('Classificacao: normal');
} else if (glicose > 100 && glicose <= 140.0) {
  console.log('Classificacao: elevado');
} else if (glicose > 140) {
  console.log('Classificacao: diabetes');
}
