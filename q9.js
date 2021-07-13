const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function resultado(){

// Entrada

const Centena = Number(prompt('Digite uma centena:'))

// Processamento e saida

if (Centena % 2 == 0){
    
    console.log(`Numero Primo ${Centena}`)
}
    else {
    console.log(`Não é um numero primo ${Centena}`)
    }
}

resultado()