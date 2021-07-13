const prompt = require('prompt-sync')(); 


function main(){

// entrada

    const numero = Number(prompt('Informe um número inteiro: '));

//processamennto

        function parOuImpar(num) {
            if(num % 2 === 0) {
                console.log(`${num} é par !`);
            }   else if(num % 2 !== 0) {
                console.log(`${num} é impar !`);
            }
        };

// saida]

parOuImpar(numero);

};

main();