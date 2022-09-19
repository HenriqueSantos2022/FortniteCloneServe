console.log('--------------------------------');
console.log('----------- Aula 54 ------------');
console.log('-------------------------------- \n');

/* /
Var

horaInicial, horaFinal, duracao : real

Inicio

escreval ("Hora inicial:")
leia (horaInicial)
escreval ("Hora final:")
leia (horaFinal)
/ */

let horaInicial = 0;
let horaFinal = 0;
let duracao = 0;

horaInicial = 16;
horaFinal = 2;
duracao;

/* /
   se horaInicial < horaFinal entao
      duracao <- horaFinal - horaInicial
   senao
      duracao <- 24 - horaInicial + horaInicial
    fimse
/ */

if (horaInicial < horaFinal) {
  duracao = horaFinal - horaInicial;
} else {
  duracao = 24 - horaInicial + horaInicial;
}

// escreval ("O JOGO DUROU ", duracao, " HORA(S)")
console.log('O JOGO DUROU ', duracao, ' HORA(S)');
