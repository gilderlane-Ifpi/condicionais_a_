const prompt = require('prompt-sync')();

function main(){

// Entrada
    
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=\nSendo,\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n-=-=-=-=-=-=-=-=-=-=-=-=')
    const opereacao = Number(prompt('Informe a operação de acordo com a tabela acima: '));
    const primeiroValor = Number(prompt('Informe o primeiro valor: '));
    const segundoValor = Number(prompt('Informe o segundo valor: '));
    
// Processamento

        function process(num1, num2, num3) {
            if(num1 === 1) {
                console.log(num3 + num2);
            }   else if(num1 === 2) {
                console.log(num2 - num3);
            }   else if(num1 === 3) {
                console.log(num3 * num2);
            }   else if(num1 === 4) {
                    if(num2 > num3){
                        console.log(num2 / num3);
                    }   else if(num2 < num3) {
                        console.log(num3 / num2);
                    }
            }
};

// Saída

process(opereacao, primeiroValor, segundoValor);

};

main()