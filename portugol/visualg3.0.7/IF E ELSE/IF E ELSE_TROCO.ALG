Algoritmo "IF E ELSE_TROCO"

Var

preco: real
quantidade : inteiro
dinheiro : real
troco : real
resto : real
Inicio

 escreva ("Preço unitário do produto: ")
 leia (preco)
 escreva ("Quantidade comprada: ")
 leia(quantidade)
 escreva ("Dinheiro recebido: ")
 leia (dinheiro)
 
 
  se dinheiro >= (preco * quantidade) entao
    troco <- dinheiro - preco * quantidade
    escreval ("TROCO = ", troco:4:2)
  senao
  resto <- preco * quantidade - dinheiro
  escreval ("DINHEIRO INSUFICIENTE, FALTAM R$", resto:4:2, " REAIS")
 
 fimse
Fimalgoritmo