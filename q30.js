const prompt = require('prompt-sync')();

function main() {

// Entrada

    const numero = Number(prompt('Informe um número de quatro dígitos: '));

// Processamento

        function quadradoPerfeito(num) {
            doisPrimeirosDigitos = ((num / 100) - ((num % 100) / 100));
            doisUltimosDigitos = num % 100;
            soma = doisPrimeirosDigitos + doisUltimosDigitos;
            if(soma**2 === num) {
                console.log(`${doisPrimeirosDigitos} + ${doisUltimosDigitos} = ${soma} -> ${soma}² = ${soma**2}`);
                console.log(`Obdece a característica !`);
            }   else if(soma**2 !== num) {
                console.log(`${doisPrimeirosDigitos} + ${doisUltimosDigitos} = ${soma} -> ${soma}² ≠ ${soma**2}`);
                console.log(`Não obdece a característica !`);               
            }
        };

// Saída

quadradoPerfeito(numero);

    };

main();