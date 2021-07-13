const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

function resultado(){

const in01 = Number(prompt('Escreva um numero:'))
const in02 = Number(prompt('Escreva outro numero:'))
const in03 = Number(prompt('Escreva outro numero:'))


if ( in01 == in02 && in01 == in03 && in02 == in03 ){
    console.log(`3 Numeros iguas b`)}
else if (in02 == in03 || in02 == in01 ){
    console.log(`2 Numeros iguas`)}
else{
    console.log('Sem Numeros Iguais')}
}

resultado()