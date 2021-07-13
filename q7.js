const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function resultado(){
const Triangulo01 = Number(prompt('Tamanho do primeiro lado do triangulo:'))
const Triangulo02 = Number(prompt('Tamanho do segundo lado do triangulo:'))
const Triangulo03 = Number(prompt('Tamanho do terceiro lado do triangulo:'))


if ( Triangulo01 == Triangulo02 && Triangulo01 == Triangulo03 && Triangulo02 == Triangulo03 ){
    console.log(`Tringuro equilatero`)}
else if (Triangulo02 == Triangulo03 || Triangulo02 == Triangulo01 ){
    console.log(`Triangulo isosceles `)}
else{
    console.log('Triangulo escaleno')}
}

resultado()
