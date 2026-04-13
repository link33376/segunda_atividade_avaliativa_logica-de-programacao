 function jogos(){

console.log("Os melhores jogos, segundo a equipe 4:");
    let jogos = ["Sekiro: Shadows Die Twice", "Stardew Valley", "Dark Souls", "Pokémon Red/Blue", "Marvel Rivals", "Heartopia"];  

   
    for (let i = 0; i < jogos.length; i++) {
       
       
        if (jogos[i] === "Sekiro: Shadows Die Twice") {
            console.log(`O ${jogos[i]} é o campeão!`);   
      
      
        }   else if (jogos[i] === "Stardew Valley") {       
            console.log(`O ${jogos[i]} é o vice campeão!`);
       
        }   else if (jogos[i] === "Dark Souls") {
            console.log(`O ${jogos[i]} é o terceiro colocado!`);
        }    else if (jogos[i] === "Pokémon Red/Blue") {
            console.log(`O ${jogos[i]} é o quarto colocado!`);
        }   else if (jogos[i] === "Marvel Rivals") {
            console.log(`O ${jogos[i]} é o quinto colocado!`);
        } else if (jogos[i] === "Heartopia") {
            console.log(`O ${jogos[i]} é o sexto colocado!`);
        }  else {
            console.log(`O ${jogos[i]} é um jogo incrível!`);
        }   
    
    }

 }
jogos(); 