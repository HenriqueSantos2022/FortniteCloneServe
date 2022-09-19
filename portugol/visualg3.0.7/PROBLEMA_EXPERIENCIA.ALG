Algoritmo "problema_experiencia"

Var

N, i : inteiro
s, c, r, quantidade,totalS, totalC, totalR, totalCobaias :  real
pratos, pcoelhos, psapos : real
tipoCobaia : caractere
Inicio

 totalS <-0
 totalR <-0
 totalC <-0

    escreval ("Quantos casos de teste serao digitados ?")
    leia (N)
    
    para i de 1 ate N faca
    
    escreval ("Quantidade de cobaias: ")
    leia (quantidade)
    
    escreval ("Tipo de cobaia")
    leia (tipoCobaia)
    
        se tipoCobaia = "R"  entao
        totalR <- totalR + quantidade
     senao
        se tipoCobaia = "S"  entao
        totalS <- totalS + quantidade
     senao
        totalC <- totalC + quantidade
    
        fimse
      fimse
    fimpara

    
    totalCobaias <-  totalR +  totalS + totalC
    
     pratos <-   totalS / totalCobaias * 100
     pcoelhos <-   totalC / totalCobaias * 100
     psapos <- totalS / totalCobaias * 100
    
    escreval
    escreval ("RELATORIO FINAL:")
    escreval ("TOTAL : ",totalCobaias, "cobaias" )
    escreval ("TOTAL de Coelhos:",totalC)
    escreval ("TOTAL de Ratos:",totalR)
    escreval ("TOTAL de Sapos :",totalR )
    escreval ("Percentual de Coelhos:", pcoelhos:4:2)
    escreval ("Percentual de Ratos :",pratos:4:2)
    escreval ("Percentual de Sapos :",psapos:4:2 )



Fimalgoritmo