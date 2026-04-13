let numero = 4; 

function tabuada (numero) {
    if (numero >= 2) {
        for (let contador = 0; contador <= 10; contador++) {
            console.log(`${numero} x ${contador} = ${numero * contador}`);
        }
    } else {
        console.log('Número inválido. Digite um número positivo');
    }
}       

tabuada(numero);
