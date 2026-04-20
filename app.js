/*

Equipe 1 ( Titanoboa) :
Francisco Walterson
Jessica Lima
Anderlan Pinheiro
Gerson Sousa

*/


const listaDeValores = [4, 9, 1 , 6, 3, 8, 2, 7, 5];
// Valor da variavel 

function processarDadosEstudo() {
    
//Valor inicial da variavel indice, que é usada para percorrer a lista de valores
    let indice = 0; 


// Loop que continua enquanto o indice for menor que o tamanho da lista de valores
// length é uma propriedade que retorna o número de elementos em um array, então listaDeValores.length retorna o número de elementos na lista de valores
    while (indice < listaDeValores.length) {


// Valor atual da variavel valorAtual, que é o valor da lista de valores no indice atual
        let valorAtual = listaDeValores[indice]; 

// Verificação se o valor atual é maior ou igual a 5, e exibição de correspondentes
        if (valorAtual >= 5) {
            console.log(`O valor ${valorAtual} foi aprovado no teste.`);
        } else {
            console.log(`O valor ${valorAtual} é muito baixo e foi descartado.`);
        }

// Incremento do indice para passar para o próximo valor na próxima iteração do loop
        indice++; 
    }
}

// Chamada da função para processar os dados de estudo
processarDadosEstudo();