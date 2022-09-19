Algoritmo "problema_glicose"

Var

 normal, elevado, diabetes, glicose : real

Inicio

 escreval ("Digite a medida da glicose: ")
 leia (glicose)
 
 normal <- 100
 elevado <- 140.0
 diabetes <- 143.2


 escreval ("Ate",normal, " mg/dl")
 escreval ("Maior que",normal," ate",elevado," mg/dl")
 escreval ("Maior de",elevado, "mg/dl")


 se glicose <= 100.00 entao
    escreval ("Classificacao: normal")
 senao
 se glicose <=140.0 entao
    escreval ("Classificacao: elevado ")
 senao
     escreval ("Classificacao: diabetes ")

  fimse
 fimse



Fimalgoritmo