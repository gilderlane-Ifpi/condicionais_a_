const prompt = require('prompt-sync')();

function main() {

// Entrada

    const coeficienteA = Number(prompt('Informe o coeficiente A: '));
    const coeficienteB = Number(prompt('Informe o coeficiente B: '));
    const coeficienteC = Number(prompt('Informe o coeficiente C: '));

// Processamento

        function equacaoSegundoGrau(coefA, coefB, coefC) {
            delta = (coefB)**2 - 4 * coefA * coefC;
            if(delta < 0) {
                console.log('Não existem raízes reais');
            }   else if(delta > 0) {
                x1 = ((-coefB) + (delta**0.5)) / 2 * coefA;
                x2 = ((-coefB) - (delta**0.5)) / 2 * coefA;
                console.log(`Delta: ${delta}\nRaíz x1: ${x1}\nRaíz x2: ${x2}`)
            }
        }

// Saída

equacaoSegundoGrau(coeficienteA, coeficienteB, coeficienteC);

};

main()