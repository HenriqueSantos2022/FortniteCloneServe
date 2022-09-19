Algoritmo "teste_repita_ate"

Var
   c, f : real
   resp : caractere

Inicio

  repita
     escreva("Digite a temperatura em Celsius: ")
     leia (c)
     f <- 9.0 * c / 5.0 + 32.0
     escreval ("Equivalente em Fahreinheit:", f:3:1)
     escreva ("Deseja repetir (s/n)? ")
     leia (resp)
ate resp <> "s"

Fimalgoritmo