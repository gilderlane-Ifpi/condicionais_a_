const prompt = require('prompt-sync')();

function main(){

// Entrada
    
    const primeiroValor = Number(prompt('Informe o primeiro valor: '));
    const segundoValor = Number(prompt('Informe o segundo valor: '));
    
// Processamento

        function process(num1, num2) {
            if(num1 % num2 === 1) {
                console.log(`${num1} + ${num2} + ${num1 % num2} = ${num1 + num2 + (num1 % num2)}`);
            }   else if(num1 % num2 === 2) {
                    if(num1 % 2 === 0 && num2 % 2 === 0) {
                        console.log(`${num1} é par: sim\n${num2} é par: sim`);
                    }   else if(num1 % 2 === 0 && num2 % 2 !== 0) {
                        console.log(`${num1} é par: sim\n${num2} é par: não`);
                    }   else if(num1 % 2 !== 0 && num2 % 2 === 0) {
                        console.log(`${num1} é par: não\n${num2} é par: sim`);
                    }
            }   else if(num1 % num2 === 3) {
                console.log(`(${num1} + ${num2}) x ${num1} = ${(num1 + num2) * num1}`);
            }   else if(num1 % num2 === 4) {
                console.log(`(${num1} + ${num2}) / ${num2} = ${(num1 + num2) / num1}`);
            }   else {
                console.log(`(${num1})² = ${num1**2}\n(${num2})² = ${num2**2}`);
            }
        }

// Saída

process(primeiroValor, segundoValor);

};

main();