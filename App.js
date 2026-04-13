const r = require('readline-sync');

function Calcmedia() {
let soma = 0;
let contador = 0;
let nota;
    do {
        nota = r.questionFloat('Digite uma nota: ');
        if (nota >= 0 && nota <= 10) {
            soma += nota;
            contador++;
        } else {
            console.log('Nota inválida. Digite uma nota entre 0 e 10.');
        }
    } while (contador < 5);
    const media = soma / contador;
    console.log(`A média das notas é: ${media.toFixed(2)}`); 
}   
 Calcmedia();
 