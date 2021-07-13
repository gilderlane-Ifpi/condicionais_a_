const prompt = require('prompt-sync')();

function main(){

// Entrada

    const primeiroLado = Number(prompt('Informe o valor do primeiro lado: '));
    const segundoLado = Number(prompt('Informe o valor do segundo lado: '));
    const terceiroLado = Number(prompt('Informe o valor do terceiro lado: '));

// Processamento

        function trianguloRetangulo(num1, num2, num3) {
            if(num1 > num2 && num1 > num3) {
                console.log(`Hipotenusa: ${num1}\nCateto 1: ${num2}\nCateto 2: ${num3}`);
            }if(num2 > num1 && num2 > num3) {
                console.log(`Hipotenusa: ${num2}\nCateto 1: ${num1}\nCateto 2: ${num3}`);
            }if(num3 > num2 && num3 > num1) {
                console.log(`Hipotenusa: ${num3}\nCateto 1: ${num2}\nCateto 2: ${num1}`);
            }
        }

// Saída

trianguloRetangulo(primeiroLado, segundoLado, terceiroLado);

    };

main();