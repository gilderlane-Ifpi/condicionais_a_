const prompt = require('prompt-sync')();


function main(){

// Entrada

    const angulo = Number(prompt('Informe a medida do ângulo: '));

// Processamento

        function quadrante(num) {
            if(num < 90) {
                console.log('Primeiro quadrante !');
            }   else if(num > 90 && num < 180) {
                console.log('Segundo quadrante !');
            }   else if(num > 180 && num < 270) {
                console.log('Terceiro quadrante !');
            }   else if(num > 270 && num < 360) {
                console.log('Quarto quadrante !');
            }
        }

// Saída

quadrante(angulo);

};

main();