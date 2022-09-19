Algoritmo "teste SE ou NAO - 2"

Var

primeiroSemestre : real
segundoSemestre : real
notaFinal : real

Inicio

escreva ("Digite a primeira Nota: ")
leia (primeiroSemestre)
escreva ("Digite a Segunda Nota: ")
leia (segundoSemestre)

  notaFinal <- primeiroSemestre + segundoSemestre


 escreval ("NOTA FINAL DO PRIMEIRO SEMESTRE = ", primeiroSemestre:6:2)
 escreval ("NOTA FINAL DO SEGUNDO SEMESTRE = ", segundoSemestre:6:2)
 escreval ("NOTA FINAL DO ANO LETIVO = ", notaFinal: 6:1 )
 
 se notaFinal <60 entao
    escreval ("REPROVADO")
 senao notaFinal >=60 entao
    escreva ("APROVADO")

 fimse

 
Fimalgoritmo