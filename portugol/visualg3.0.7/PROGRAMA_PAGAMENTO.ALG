Algoritmo "PROGRAMA_PAGAMENTO"

var

nome: caractere
valor : inteiro
hora : inteiro
pagamento : inteiro
Inicio

  escreva ("Nome: ")
  leia (nome)
  escreva ("Digite o valor por hora: ")
  leia (valor)
  escreva ("Horas trabalhadas: ")
  leia (hora)
  
  pagamento <- hora * valor
  
  escreva ("O pagamento do(a)", nome , "deve ser de =", pagamento:8:2, " reais ")
  
  
  
Fimalgoritmo