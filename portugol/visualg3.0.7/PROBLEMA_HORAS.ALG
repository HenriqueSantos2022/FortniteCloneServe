Algoritmo "problema_horas"

Var

horaInicial, horaFinal, duracao : real

Inicio

escreval ("Hora inicial:")
leia (horaInicial)
escreval ("Hora final:")
leia (horaFinal)

escreval ("O JOGO DUROU ", duracao, " HORA(S)")


   se horaInicial < horaFinal entao
      duracao <- horaFinal - horaInicial
   senao
      duracao <- 24 - horaInicial + horaInicial
    fimse
   
Fimalgoritmo