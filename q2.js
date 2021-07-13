const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function resultado(){
const Numero01 = Number(prompt('Escreva um numero:'))
const Numero02 = Number(prompt('Escreva outro numero:'))

if (Numero01>Numero02){
    console.log(`É o Maior numero ${Numero01}`)
    console.log(`É o Menor numero ${Numero02}`)
}
else if (Numero01<Numero02){
    console.log(`É o Maior numero ${Numero02}`)
    console.log(`É o Menor numero ${Numero01}`)
}
else{
}

}

resultado()