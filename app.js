const r = require('readline-sync');

let somaDoWhile = 0;
let contadorDoWhile = 1;
let executar = true;
let texto = true;


function mediaDeNotas(){
    if (executar && texto){
        do {
            let nota = parseFloat(r.question(`Nota ${contadorDoWhile}: `));
            somaDoWhile += nota;
            contadorDoWhile++;
        } while (contadorDoWhile <= 5);

        let mediaDoWhile = somaDoWhile / 5;
        console.log("A média é: " + mediaDoWhile.toFixed(2));
    } else{
        console.log("Deu erro.");
    }
}

mediaDeNotas()