Algoritmo "TESTE-BALADA"
Var

valorDoIngresso :inteiro
clientePagante : inteiro
IdadeMinima: inteiro
idadeMaxima : inteiro


Inicio

escreval ("VALOR INGRESSO 60")
escreval ("Valor pago pelo cliente: ")
leia (clientePagante)
escreval ("A idade meinima para entrara na balada e: ")
leia (IdadeMinima)
escreval ("A idade maxima para entrara na balada e: ")
leia (idadeMaxima)

se clientePagante <60 entao
   escreval ("Barrado na Balada!")
senao ("Pode entrar na Balada!")

se (IdadeMinima <20) e idadeMaxima >30 entao
   escreva ("Barrado na entrada!")
senao ("Pode entrar de boa!")

fimse
fimse

Fimalgoritmo