Algoritmo "Programa_Terreno2"


Var


largura, comprimento, metroQuadrado, area, preco : real
inicio

// Dados que serao informados pelo usuario //

escreva ("Digite a largura do terreno:")
leia (largura)
escreva ("Digite o comprimento do terreno:")
leia (comprimento)
escreva ("Digite o valor do metroQuadrado:")
leia (metroQuadrado)

//Calculo do terreno e preco total do terreno//

area <-largura * comprimento
preco <- area * metroQuadrado

//Saidas de Dados//

escreval("A area total do terreno =", area: 8:2)
escreval("O preco do terreno =", preco:8:2)




Fimalgoritmo