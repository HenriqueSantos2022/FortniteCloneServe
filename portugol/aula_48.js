console.log('--------------------------------');
console.log('----------- Aula 48 ------------');
console.log('-------------------------------- \n');

/* / Var
preco: real
quantidade : inteiro
dinheiro : real
troco : real
resto : real
/ */

const preco = 30;
const quantidade = 3;
const dinheiro = 70;
let troco = 0;
const resto = 0;

/* /
escreva ("Preço unitário do produto: ")
 leia (preco)
 escreva ("Quantidade comprada: ")
 leia(quantidade)
 escreva ("Dinheiro recebido: ")
 leia (dinheiro)
 / */

console.log('Preço unitário do produto', preco);
console.log('Quantidade comprada', quantidade);
console.log('Dinheiro recebido', dinheiro);

/* /

  se dinheiro >= (preco * quantidade) entao
    troco <- dinheiro - preco * quantidade
    escreval ("TROCO = ", troco:4:2)
  senao
  resto <- preco * quantidade - dinheiro

/ */

if (dinheiro >= preco * quantidade) {
  console.log('TROCO =', troco);
} else {
  troco = dinheiro - preco * quantidade;
}
if ((troco = preco * quantidade - dinheiro)) {
} else {
  troco < dinheiro - preco * quantidade;
}
// escreval ("DINHEIRO INSUFICIENTE, FALTAM R$", resto:4:2, " REAIS")
