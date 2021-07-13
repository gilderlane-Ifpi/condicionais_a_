const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const a = Number(prompt('Digite um numero:'))
const b = Number(prompt('Digite um numero:'))
const c = Number(prompt('Digite um numero:'))


function resultado(){
if (a<b && b<c){
console.log(a,b,c)
}   
else if ((a<c && c<b)){
console.log(a,c,b)}
else if ((a<b && b<c)){
console.log(a,c,b)}
else if ((b<a && a<c)){
console.log(b,a,c)}
else if ((b<c && c<a)){
console.log(b,c,a)}
else if ((c<a && a<b)){
console.log(c,a,b)}
else if ((c<b && b<a)){
console.log(c,b,a)}
else{
     }
}
resultado()