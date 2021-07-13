const prompt = require('prompt-sync')();

function main() {

// Entrada

    const senha = (prompt('Insira a senha de 4 dígitos: '));

// Processamento

        function seguranca(num) {
            if(num === '1234') {
                console.log('Acesso permitido !');
            }   else{
                console.log('Acesso negado !');
            }
        }

// Saída

seguranca(senha);

    };

main()