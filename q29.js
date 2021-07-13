const prompt = require('prompt-sync')();

function main() {

// Entrada

    const numero = Number(prompt('Informe um número de quatro dígitos: '));

// Processamento

        function quadradoPerfeito(num) {
            doisPrimeirosDigitos = ((num / 100) - ((num % 100) / 100));
            doisUltimosDigitos = num % 100;
            soma = doisPrimeirosDigitos + doisUltimosDigitos;
            raizQuadrada = num ** 0.5;
            if(raizQuadrada === soma) {
                console.log(`√${num} = ${raizQuadrada} = ${doisPrimeirosDigitos} + ${doisUltimosDigitos}\nPortanto, é um quadrado perfeito !`);
            }   else{
                console.log(`√${num} = ${raizQuadrada} ≠  ${doisPrimeirosDigitos} + ${doisUltimosDigitos}\nPortanto, NÃO é um quadrado perfeito !`);
            }
        };

// Saída

quadradoPerfeito(numero);

};

main();