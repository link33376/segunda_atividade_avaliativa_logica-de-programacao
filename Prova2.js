const readline = require('readline-sync');
function tabuada() {
    let numero = Number(readline.question("Digite um numero: "));
    
    if (numero >= 0) {
        for (let i = 1; i <= 10; i++) {
            console.log(numero + " x " + i + " = " + (numero * i));
        }
    } else {
        console.log("numero invalido");
    }
}

tabuada();


