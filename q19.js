const prompt = require('prompt-sync')();

function main(){

// Entrada

    const altura = Number(prompt('Informe a altura(em metros) : '));
    const peso = Number(prompt('Informe o peso(em kg) : '));

// Processamento

        function imc(num1, num2) {
            imc = num2 / (num1 ** 2);
            if(imc < 25) {
                console.log('Peso normal !');
            }   else if(imc >= 25 && imc <= 30) {
                console.log('Obeso !')
            }   else if(imc > 30) {
                console.log('Obesidade mórbida !')
            }
        }

// Saída

imc(altura, peso);

};

main();