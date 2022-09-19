console.log('--------------------------------');
console.log('----------- Aula 55 ------------');
console.log('-------------------------------- \n');

/* /
escreval("Valor de X")
 leia (x)
 escreval("Valor de Y")
 leia (y)
/ */

const x = 0;
const y = 0;

console.log('O valor de X', x);
console.log('O valor de Y', y);

/* /
se (x >0) e (y >0) entao
   escreva ("Q1")
  senao
    se ( x <0) e (y <0) entao
      escreva ("Q2")
     senao
       se (x <0) e (y <0) entao
         escreva ("Q3")
        senao
          se (x >0) e (y <0) entao
            escreva ("Q4")
           senao
             se (x = 0) e (y = 0) entao
               escreva ("Origem")
              senao
                se x = 0 entao
                  escreva ("Eixo Y")
                 senao
                    escreva ("Eixo X")
                 fimse
              fimse
          fimse
       fimse
    fimse
fimse
/ */

if (x > 0 && y > 0) {
  console.log('Q1');
} else {
  x < 0 && y < 0;
  console.log('Q2');
  if (x < 0 && y < 0) {
    console.log('Q3');
  } else {
    x > 0 && y < 0;
    console.log('Q4');
    if (x == 0 && y == 0) {
      console.log('Origem');
    } else {
      x == 0;
      console.log('Eixo Y');
      if (y == 0) {
        console.log('Eixo X');
      }
    }
  }
}
