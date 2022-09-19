console.log('--------------------------------');
console.log('----------- Aula 53 ------------');
console.log('-------------------------------- \n');

/* /
Var

  salarioAtual : real
  novoSalario : real
  aumento : real
  porcentagem :  real
/ */

let salarioAtual = 2500.0;
let novoSalario = 0;
let aumento = 0;
let porcentagem = 15;

/* /
aumento <- salarioAtual * porcentagem / 100
novoSalario <- salarioAtual + aumento
/ */

salarioAtual = 2500.0;
novoSalario = salarioAtual + aumento;
aumento = (salarioAtual * porcentagem) / 2;

/* /
escreval ("Seu novo salario = R$", novoSalario:4:2)
  escreval ("Sua porcenatagem de aumento e", porcentagem, "%")
  escreval ("Voce teve um aumento de = R$ ", aumento:4:2)
/ */

console.log('Seu novo salario = R$', novoSalario);
console.log('Sua porcenatagem de aumento e', porcentagem);
console.log('Voce teve um aumento de = R$ ', aumento);

/* /
    se salarioAtual <= 1000.0 entao
       porcentagem <- 20
  senao
    se salarioAtual <= 3000.0 entao
       porcentagem <- 15
  senao
    se salarioAtual <= 8000. 0 entao
       porcentagem <- 10
  senao
     porcentagem <- 5

  fimse
 fimse
fimse
/ */

if (salarioAtual <= 1000.0) {
  porcentagem = 20;
} else {
  salarioAtual <= 3000.0;
  porcentagem = 15;
  if (salarioAtual <= 8000) {
    porcentagem = 10;
  } else {
    salarioAtual > 8000;
    porcentagem = 5;
  }
}
