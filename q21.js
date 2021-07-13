const prompt = require('prompt-sync')();

function main() {

// Entrada

    const numero = Number(prompt('Informe um número fracionário entre 1 até 1000: '));

// Processamento

        function arredondamento(num) {
                parteFracionaria = (num % 1);
                if(parteFracionaria >= 0.5) {
                    num = ((num - parteFracionaria) + 1);
                    console.log(num);
                } else if(parteFracionaria < 0.5) {
                    num = (num - parteFracionaria);
                    console.log(num);
                }
            }

// Saída

arredondamento(numero);

};

main();