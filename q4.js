const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const input = Number(prompt('Digite uma centena:'))
const Numero = (input).toString().split("")

function resultado(){if (Numero[1]=== Numero[2]){
    console.log('algarismo da dezena é igual ao algarismo da unidade')
}
    else {
    console.log('algarismo da dezena é diferente ao algarismo da unidade')
    }
}
resultado()