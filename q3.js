const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function resultado(){
const Numero01 = Number(prompt('Primeiro numero:'))
const Numero02 = Number(prompt('Segundo numero:'))
const Numero03 = Number(prompt('Terceiro numero:'))


if ( Numero01>Numero02 && Numero01>Numero03 ){
    console.log(`Primeiro numero é o maior`)}
else if (Numero02>Numero01 && Numero02>Numero03 ){
    console.log(`Segundo numero é o maior`)}
else if  (Numero03>Numero01 && Numero03>Numero01 ){
    console.log(`Terceiro numero é o maior`)}
else{
    console.log('Numero iguais')}
}

resultado()