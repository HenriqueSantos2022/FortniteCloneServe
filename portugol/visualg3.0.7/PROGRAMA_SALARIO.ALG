Algoritmo "programa_salario"

Var

  salarioAtual : real
  novoSalario : real
  aumento : real
  porcentagem :  real

Inicio

  escreva ("Digite seu salario atual: ")
  leia (salarioAtual)


  escreval ("Seu novo salario = R$", novoSalario:4:2)
  escreval ("Sua porcenatagem de aumento e", porcentagem, "%")
  escreval ("Voce teve um aumento de = R$ ", aumento:4:2)

  aumento <- salarioAtual * porcentagem / 100
  novoSalario <- salarioAtual + aumento


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

Fimalgoritmo