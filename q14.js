const prompt = require('prompt-sync')();

function main(){

// Entrada

    const primeiroNumero = Number(prompt('Informe o primeiro número: '));
    const segundoNumero = Number(prompt('Informe o segundo número: '));
    const terceiroNumero = Number(prompt('Informe o terceiro número: '));
    const quartoNumero = Number(prompt('Informe o quarto número: '));
    const quintoNumero = Number(prompt('Informe o quinto número: '));

// Processamento

        function maioresQueAMedia(num1, num2, num3, num4, num5) {
            media = (num1 + num2 + num3 + num4 + num5) / 5;
            console.log(`Média: ${media}`);
            if(num1 > media) {
                console.log(`O número ${num1} é maior que a média !`);
            }   

            if(num2 > media) {
                console.log(`O número ${num2} é maior que a média !`);
            }  

            if(num3 > media) {
                console.log(`O número ${num3} é maior que a média !`);
            } 

            if(num4 > media) {
                console.log(`O número ${num4} é maior que a média !`);
            } 

            if(num5 > media) {
                console.log(`O número ${num5} é maior que a média !`);
            }   

        };

// Saida

maioresQueAMedia(primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, quintoNumero);

};

main()